import Cookies from "js-cookie";

const serverAddress = "http://localhost:3000/"

async function fetchUserById(userid){
    const data = await fetch(serverAddress+"user/"+userid);
    const user = await data.json();
    return user;
}

export function getUserId(){
    const userid = Cookies.get("userid");
    if (userid){
        return userid;
    } else {
        return null;
    }
}

export async function layoutLoader({request, params}){
    const userid = getUserId();
    if (userid){
        const user = await fetchUserById(userid);
        return user;
    } else {
        return null;
    }
}