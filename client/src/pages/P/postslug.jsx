import { useLocation } from "react-router-dom"

export default function PostSlug() {
    const location = useLocation()
    const postObj = location.state
    console.log(postObj)
    return (
        <>
            <div id="title">
                <h3>{postObj.title}</h3>
            </div>
            <div id="author">
                <p>{postObj.author}</p>
            </div>
            <div id="content">
                {postObj.content}
            </div>
        </>
    )
}