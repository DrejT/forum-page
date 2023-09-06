import { Form, useActionData } from "react-router-dom"

function Login(){
  const user = useActionData();
  return (
    <div>
      <h3>Log In</h3>
      <Form method="post">
        <label name="username">Username</label>
      <input type="text" name="username" />
      <label name="password">Password</label>
      <input type="text" name="password" />
      <button type="submit">Login</button>
    </Form>
    {typeof user === "string" ?
        <>
        <p>{user}</p>
        </>:
        <></>}
    </div>
  )
}

export default Login