export async function postsAction({request, params}){
    const formdata = await request.formData();
    const username = formdata.get("username");
    if (username){
        const data = await fetch("http://localhost/"+ "post");
        const posts = await data.json();
        if (posts){
            return posts;
        } else {
            return "no posts yet"
        }
    }
}