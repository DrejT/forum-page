import CreatePost from "../create/post"
import CreateSection from "../create/section"
import CreateThread from "../create/thread"
import GetAllSections from "../getallsections"
import GetAllThreads from "../getallthreads"
// import GetAllPosts from "../getallposts"

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
                {
                    // this if else loops makes sure that if user is admin
                    // then all the options are visible to the user
                    // like thread and section, whereas if the user is not
                    // admin than only the form to create posts is visible
                    userData.role === "admin" ? (
                        <>
                            <div className="section">
                                <h5>Sections</h5>
                                <GetAllSections user={userData} />
                                <CreateSection />
                            </div>
                            <div className="thread">
                                <h5>Threads</h5>
                                <GetAllThreads user={userData} />
                                <CreateThread />
                            </div>
                            <div className="post">
                                <h5>Posts</h5>
                                {
                                    // get all posts
                                }
                                <CreatePost />
                            </div>
                        </>
                    ) : (
                        // show the a normal users create section
                        <>
                            <div className="post">
                                <h5>Posts</h5>
                                {
                                    // get all posts
                                }
                                <CreatePost />
                            </div>
                        </>
                    )
                }

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