import { Link } from "react-router-dom"

const Navbar = ({ user }) => {
  return (
    <div className="flex justify-center sticky top-2">
      <div className="bg-gradient-to-t from-slate-400 to-slate-transparent to-30% backdrop-filter backdrop-blur-lg rounded p-1 bg-opacity-50">
        <nav className="">
          <div className="">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="u">Search</Link>
            <Link to="/">Portfolio</Link>
            {
              user === false ? (
                <>
                  <Link to="signup">Get Started</Link>
                </>
              ) : (
                <>
                  <Link to={"u/" + user.username} className="text-info">{user.username}</Link>
                  <Link to="/logout" className="text-error" reloadDocument>Logout</Link>
                </>
              )
            }
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
