import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import Profile from "../../components/profile/profile";

export default function Username() {
    const loaderData = useLoaderData();
    const loggedInData = useRouteLoaderData("layout");
    console.log(loggedInData);
    return (
        <div>
            {
                loaderData === "user does not exists" ? (
                    <>User not found</>
                ) : (
                    <>
                        <Profile loggedin={loaderData._id === loggedInData.loggedInUser._id} userData={loaderData} />
                    </>
                )
            }
        </div>
    )
}