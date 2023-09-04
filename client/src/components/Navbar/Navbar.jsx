import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="about">About</Link> |
        <Link to="#">Portfolio</Link> |
        <Link to="signup">Get Started</Link>
    </nav>
    </div>
  )
}

export default Navbar
