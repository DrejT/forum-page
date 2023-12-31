import Cookies from "js-cookie";
import { SERVER_ADDRESS } from "../utils/fetchsection";
import { redirect } from "react-router-dom";

export async function postsAction({ request, params }) {
    const formdata = await request.formData();
    const formtype = formdata.get("formtype");
    const authorId = Cookies.get("userid")
    if (authorId === "guest") {
        return "guests cannot post"
    }
    switch (formtype) {
        case "post":
            const title = formdata.get("title");
            const content = formdata.get("content");
            const threadId = formdata.get("threadId");
            // const images = formdata.get("images");
            // console.log(images, typeof images)
            const postData = await fetch(SERVER_ADDRESS + "post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    content: content,
                    threadId: threadId,
                    authorId: authorId
                })
            });
            const post = await postData.json();
            if (post) {
                return redirect("/");
            } else {
                return "there was an error while submiting the post";
            }
    }
}