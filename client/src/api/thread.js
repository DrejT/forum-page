import Cookies from "js-cookie";

const SERVER_ADDRESS = "http://localhost:3000/"

export async function threadAction({request, params}){
    const userid = Cookies.get("userid");
    const formData = await request.formData();
    const formtype = formData.get("formtype");
    console.log(formtype)
    switch (formtype) {
        case "post":
            const threadName = formData.get("threadName");
            const forSection = formData.get("sectionName");
            const threadDesc = formData.get("threadDesc");
            console.log("the data is", threadName, forSection, threadDesc)
            const data = await fetch(SERVER_ADDRESS + "thread", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: threadName,
                    description: threadDesc,
                    authorId: userid,
                    section:forSection
                })
            });
            const thread = await data.json();
            if (thread) {
                console.log("this is raw thread", thread);
                return thread;
            } else {
                return false;
            }
        case "patch":

        case "delete":

        default:
            return {
                message:"there was an error while submitting the form"
            }
    }
}