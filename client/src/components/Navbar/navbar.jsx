import { Link, useRouteLoaderData } from "react-router-dom"

const Navbar = () => {
  const layoutData = useRouteLoaderData("layout");
  return (
    <div>
      <nav className="">
        <Link to="/">Home</Link> |
        <Link to="about">About</Link> |
        <Link to="/">Portfolio</Link> |
        {
          layoutData === "guest" ? (
            <>
            <Link to="signup">Get Started</Link>
            </>
          ):(
            <>
            <Link to={"u/"+layoutData.username}>{layoutData.username} !</Link> |
            <Link to="/logout"> logout</Link>
            </>
          )
        }
    </nav>
    </div>
  )
}

export default Navbar
