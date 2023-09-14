import Create from "../create/create"

export default function Display({ viewer, userData }) {
    if (viewer === "user") {
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
                <Create />
            </>
        )
    }
}