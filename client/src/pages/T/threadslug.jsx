import { useLoaderData } from "react-router-dom"

export default function ThreadSlug(){
    const threadLoaderData = useLoaderData()
    console.log(threadLoaderData)
    return (
        <>
        {
            threadLoaderData.message?(
                <>
                {threadLoaderData.message}
                </>
            ):(
                <div>
                    <h3>{threadLoaderData.thread.title}</h3>
                </div>
            )
        }
        </>
    )
}