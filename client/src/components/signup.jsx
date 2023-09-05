import { Form, useActionData } from "react-router-dom";

export default function Signup(){
  const user = useActionData();
  return (
    <div>
      <h3>Sign Up</h3>
      <Form method="post">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" minLength="2" />
        <label htmlFor="email">E-mail Address</label>
        <input type="text" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" minLength="4" />
        <button type="submit">Register</button>
        {typeof user === "string" ?
        <>
        <p>{user}</p>
        </>:
        <></>}
      </Form>
    </div>
  )
}