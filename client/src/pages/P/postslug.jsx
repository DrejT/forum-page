import { useLocation } from "react-router-dom"

export default function PostSlug() {
    const location = useLocation();
    const postObj = location.state;
    return (
        <>
            <div id="title">
                <h3>{postObj.obj.title}</h3>
            </div>
            <div id="author">
                <p>{postObj.obj.author}</p>
            </div>
            <div id="in-thread">
                <p>thread:{postObj.thread}</p>
            </div>
            <div id="content">
                {postObj.obj.content}
            </div>
        </>
    )
}