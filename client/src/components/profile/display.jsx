import Create from "../create/create"

export default function Display({ viewer, userData }) {
    if (viewer === "user") {
        // return if the user is loggedin
        // and display the create options
        // and the forms
        return (
            <>
                <h2>{userData.username}</h2>
                <div id="posts">
                </div>
                <div id="admin-stuff">
                    <Create role={userData.role} />
                </div>
                {/* <CreatePost /> */}
            </>
        )
    } else {
        return (
            <>
                {/* add code to GET requests to showcase all posts and threads as a guest */}
            </>
        )
    }
}