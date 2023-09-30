import { Link, useLoaderData } from "react-router-dom"

export default function ThreadSlug() {
    const threadLoaderData = useLoaderData()
    return (
        <>
            {
                threadLoaderData.message ? (
                    <>
                        {threadLoaderData.message}
                    </>
                ) : (
                    <div id="thread">
                        <div>
                            <h3>{threadLoaderData.thread.title}</h3>
                            <p>{threadLoaderData.thread.description}</p>
                        </div>
                        {
                            threadLoaderData.thread.posts.length > 0 ? (
                                threadLoaderData.thread.posts.map((postObj) => {
                                    return (
                                        <div key={postObj._id}>
                                            <Link to={"/p/" + postObj.slug} state={{"thread":threadLoaderData.thread.title, obj:postObj}}>{postObj.title}</Link>
                                        </div>
                                    )
                                })
                            ) : (
                                <>no posts to display</>
                            )

                        }
                    </div>
                )
            }
        </>
    )
}