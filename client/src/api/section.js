import Cookies from "js-cookie";

const SERVER_ADDRESS = "http://localhost:3000/"

export async function sectionAction({ request, params }) {
    const formData = await request.formData();
    const formtype = formData.get("formtype");
    const userid = Cookies.get("userid");
    console.log(formtype, userid)
    switch (formtype) {
        case "post":
            const sectionName = formData.get("sectionName");
            const data = await fetch(SERVER_ADDRESS + "section", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: sectionName,
                    authorId: userid
                })
            });
            const section = await data.json();
            if (section) {
                console.log("this is raw section", section);
                return section;
            } else {
                return false;
            }
        case "patch": // put replaces the existing resource entirely with the given payload
            const sectionId = formData.get("sectionId");
            const newSectionName = formData.get("newSectionName");
            const patchData = await fetch(SERVER_ADDRESS + "section/" + sectionId, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: sectionId,
                    userid: userid,
                    name: newSectionName,
                })
            });
            const patchSection = patchData.json();
            if (patchSection) {
                return patchSection;
            } else {
                return false;
            }
        case "delete":

        default:
            return {
                message: "there was an error while submitting the form"
            }
    }
}