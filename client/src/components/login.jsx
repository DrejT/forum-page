import { Form, Link, useActionData, useLoaderData } from "react-router-dom"

function Login(){
  const user = useActionData();
  const load = useLoaderData();
  return (
    <div>
      <h3>Log In</h3>
      <Form method="post">
        <label name="username">Username</label>
      <input type="text" name="username" />
      <label name="password">Password</label>
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </Form>
    <p>Don't have an account?<Link to="/signup">Signup here</Link></p>
    {typeof user === "string" ?
        <>
        <p>{user}</p>
        </>:
        <></>}
    </div>
  )
}

export default Login