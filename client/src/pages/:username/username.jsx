import { useLoaderData, useRouteLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";
import Create from "../../components/create/create";

export default function Username(){
    const loaderData = useLoaderData();
    const loggedIn = useRouteLoaderData("layout");
    return (
        <div>
            {
                loaderData === "user does not exists" ? (
                    <>User not found</>
                ):(
                    <>
                    <h3>{loaderData.username}</h3></>
                )
            }
            <>{
                loaderData._id === loggedIn._id ? (
                    <>
                    Create
                    <Create role={loggedIn.role}/>
                    </>
                ):(
                    <>
                    </>
                )
            }
            </>
        </div>
    )
}