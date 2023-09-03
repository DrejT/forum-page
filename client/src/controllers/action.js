import axios from "axios";
import { redirect } from "react-router-dom";

const serverAddress = "http://localhost:3000/user";

// runs everytime the signup form is submitted
export async function signupAction({request,params}){
    const formData = await request.formData();
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    axios.post(serverAddress, {
      username:username,
      email:email,
      password:password
    },{
        headers: {
        'Content-Type': 'application/json'
      }
    }).then(async function (response) {
        console.log("response",response.data.message);
        return redirect("/login");
      })
    .catch(async function (error) {
        console.log(error.response.data.message);
    });
    console.log("exiting")
    return null;
}