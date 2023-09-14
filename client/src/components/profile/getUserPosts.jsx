function usefetchPosts(){
    async function getPosts({userid}){
        try {
            const data = await fetch("http://localhost:3000/section/"+ userid);
            const sectionData = await data.json();
            return sectionData;
        } catch (err) {
            console.error(err);
            return {
                message: err.message
            }
        }
    }
    return getPosts
}

export default function GetUserPosts({userid}){
    const getPosts = usefetchPosts();
    return 
}