import Cookies from "js-cookie";

const serverAddress = "http://localhost:3000/"

async function fetchUserById(userid) {
    if (userid){
        const data = await fetch(serverAddress + "user/id/" + userid);
    const user = await data.json();
    return user;
    } else {
        return null;
    }
    
}

export function getUserId() {
    const userid = Cookies.get("userid");
    if (userid) {
        return userid;
    } else {
        Cookies.set("userid", "guest");
        return {
            userid:"guest",
            _id:"guest"
        };;
    }
}

export async function layoutLoader({ request, params }) {
    const userid = getUserId();
    if (userid !== "guest") {
        const user = await fetchUserById(userid);
        return user;
    } else {
        return userid;
    }
}

export async function usernameLoader({ request, params }) {
    const username = params.username;
    const data = await fetch(serverAddress + "user/" + username);
    const user = await data.json();
    if (user.message) {
        return "user does not exists";
    } else {
        return user;
    }
}

export async function searchUsernameLoader({ request, params }) {
    let url = new URL(request.url);
    let username = url.searchParams.get("username");
    if (username){
        const data = await fetch(serverAddress + "user/" + username);
        const user = await data.json();
        return user
    } else {
        return null
    }
}