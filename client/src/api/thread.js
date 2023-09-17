import Cookies from "js-cookie";

export async function threadAction({request, params}){
    const userid = Cookies.get("userid");
    const formData = await request.formData();
    const formtype = formData.get("formtype");
    switch (formtype) {
        case "post":

        case "patch":

        case "delete":

        default:
            return {
                message:"there was an error while submitting the form"
            }
    }
}