import Cookies from "js-cookie";

const SERVER_ADDRESS = "http://localhost:3000/"

export async function threadAction({ request, params }) {
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
            const postData = await fetch(SERVER_ADDRESS + "thread", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: threadName,
                    description: threadDesc,
                    authorId: userid,
                    section: forSection
                })
            });
            const postThread = await postData.json();
            if (postThread) {
                return postThread;
            } else {
                return false;
            }
        case "patch":
            const newThreadName = formData.get("newThreadName");
            const newsectionName = formData.get("newSectionName");
            const newThreadDesc = formData.get("newThreadDesc");
            const threadId = formData.get("threadId");
            console.log("the data is ", newThreadName, newsectionName, newThreadDesc, threadId)
            const patchData = await fetch(SERVER_ADDRESS + "thread/" + threadId, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: newThreadName,
                    description: newThreadDesc,
                    section: newsectionName
                })
            });
            const patchThread = await patchData.json();
            if (patchThread) {
                return patchThread;
            } else {
                return false;
            }
        case "delete":
            const deleteThreadId = formData.get("threadId");
            const deleteSectionId = formData.get("sectionId");
            console.log("inside delete", deleteSectionId, deleteThreadId);
            const deleteData = await fetch(SERVER_ADDRESS + "thread/" + deleteThreadId,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId:userid,
                    sectionId:deleteSectionId
                })
            });
            const deleteThread = await deleteData.json();
            console.log(deleteThread);
            if (deleteThread.message == "thread deleted") {
                return deleteThread;
            } else {
                return false;
            }
        default:
            return {
                message: "there was an error while submitting the form"
            }
    }
}