import { Link, useRouteLoaderData } from "react-router-dom"

const Navbar = () => {
  const layoutData = useRouteLoaderData("layout");
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="about">About</Link> |
        <Link to="#">Portfolio</Link> |
        {
          layoutData?(
            <>
            <Link to=":username"> {layoutData.username}!</Link>
            </>
          ):(
            <>
        <Link to="signup">Get Started</Link>
            </>
          )
        }
    </nav>
    </div>
  )
}

export default Navbar
