import { Outlet, useLoaderData, useRouteLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";

export default function Username(){
    const loaderData = useLoaderData();
    const loggedIn = useRouteLoaderData("layout")
    return (
        <div>
            {
                loaderData === null ? (
                    <>User not found</>
                ):(
                    <>
                    <h3>{loaderData.username}</h3></>
                )
            }
            <>{
                loaderData._id === loggedIn._id ? (
                    <>
                    create new <Link to="new">post</Link>
                    <Outlet/>
                    {loaderData.role === "admin" ? (
                        <>
                        <h4>You are an Admin</h4>
                        </>
                    ):(
                        <></>
                    )}
                    </>
                ):(
                    <></>
                )
            }
            </>
        </div>
    )
}