import axios from "axios";
import { redirect } from "react-router-dom";

const serverAddress = "http://localhost:3000/user";

// runs everytime the signup form is submitted
export async function signupAction({request,params}){
    const formData = await request.formData();
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    let data;
    try {
      const res = await fetch( serverAddress, {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username:username,
          email:email,
          password:password
        }),
      });
      data = await res.json();
    } catch (error) {
      console.log(error);
    } finally {
      if (data.message === "user created successfully"){
        return redirect("/login");
      } else {
        return data.message;
      }
    }
}