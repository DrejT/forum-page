import { redirect } from "react-router-dom";
import Cookies from "js-cookie";

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
          password:password,
          formtype:"signup"
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


// runs when the login form is submitted
export async function loginAction({request,params}){
  const formdata = await request.formData();
  const username = formdata.get("username");
  const password = formdata.get("password");
  let data;
    try {
      const res = await fetch( serverAddress, {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username:username,
          password:password,
          formtype:"login"
        }),
      });
      data = await res.json();
    } catch (error) {
      console.log(error);
    } finally {
      if (data.message === "login successful"){
        console.log(data);
        Cookies.set("userid", data.user._id, { expires: 3 });
        return redirect("/");
      } else {
        return data.message;
      }
    }
}
