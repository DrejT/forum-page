import { useLoaderData, useRouteLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";

export default function Username(){
    const loaderData = useLoaderData();
    const loggedIn = useRouteLoaderData("layout")
    console.log("loggedin as", loggedIn)
    return (
        <div>
            {
                (loaderData._id === loaderData._id)?(
                    <>
            <p>Hello {loaderData.username}</p>
            <p>{loaderData.createdAt}</p>
            <p>Your role is {loaderData.role}</p>
            {
                loggedIn?(
            <Link to="new">Create post</Link>
                ):(
                    <></>
                )
            }
                    </>
                ):(
                    <>
                    User Not Found
                    </>
                )
            }
        </div>
    )
}