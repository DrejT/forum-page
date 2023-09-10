import { Link, useRouteLoaderData } from "react-router-dom"

const Navbar = () => {
  const layoutData = useRouteLoaderData("layout");
  console.log("this is the layout", layoutData);
  return (
    <div>
      <nav className="">
        <Link to="/">Home</Link> |
        <Link to="about">About</Link> |
        <Link to="/">Portfolio</Link> |
        {
          layoutData.userid !== "guest" ? (
            <>
            <Link to={"u/"+layoutData.username}>{layoutData.username}!</Link>
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
