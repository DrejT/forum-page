import { Form } from "react-router-dom"

const Login = () => {
  return (
    <div>
      <h3>Log In</h3>
      <Form method="get" action="/login">
        <label name="username">Username</label>
      <input type="text" name="username" />
      <label name="password">Password</label>
      <input type="text" name="password" />
      <button type="submit">Login</button>
    </Form>
    </div>
  )
}

export default Login