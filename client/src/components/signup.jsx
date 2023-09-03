import { Form, useActionData } from "react-router-dom";

export default function Signup(){
  const user = useActionData();
  console.log("this is the user var ", user);
  return (
    <div>
      <h3>Sign Up</h3>
      <Form method="post">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" minLength="5" />
        <label htmlFor="email">E-mail Address</label>
        <input type="text" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" minLength="8" />
        <button type="submit">Register</button>
      </Form>
    </div>
  )
}