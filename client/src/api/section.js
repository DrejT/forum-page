import Cookies from "js-cookie";
import { json } from "react-router-dom";

const SERVER_ADDRESS = "http://localhost:3000/"

export async function sectionAction({ request, params }) {
    console.log("inside section action");
    const formData = await request.formData();
    const formtype = formData.get("formtype");
    const userid = Cookies.get("userid");
    console.log(formtype, userid)
    switch (formtype) {
        case "get":
            console.log("inside get")
            const sectionlist = formData.get("section");
            return null
            break;
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
            const sectionJson = json(section);
            console.log("recieved section", sectionJson);
            if (sectionJson) {
                return sectionJson;
            } else {
                return false;
            }
            break // cautionary break to exit
        case "patch": // put replaces the existing resource entirely with the given payload

        case "delete":

        default:
            return {
                message: "there was an error while submitting the form"
            }
    }
}