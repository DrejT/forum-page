import { Link } from "react-router-dom"

const Navbar = ({user}) => {
  return (
    <div>
      <nav className="">
        <Link to="/">Home</Link> |
        <Link to="about">About</Link> |
        <Link to="u">Search</Link> |
        <Link to="/">Portfolio</Link> |
        {
          user === false ? (
            <>
            <Link to="signup">Get Started</Link>
            </>
          ):(
            <>
            <Link to={"u/"+user.username}>{user.username} !</Link> |
            <Link to="/logout" reloadDocument> logout</Link>
            </>
          )
        }
    </nav>
    </div>
  )
}

export default Navbar
