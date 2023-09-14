import CreateSection from "./section";
import CreatePost from "./post"
import CreateThread from "./thread"

export default function Create({ role="user" }) {
    // this component is only rendered if the profile visited 
    // is same as the one that the user has logged into
    // that is the current user
    // this components makes different forms available to the user based on their role
    if (role === "admin") {
        return (
            <>
                <CreateSection />
                <CreateThread />
                <CreatePost />
            </>
        )
    } else {
        // add the component with the form to create a post
        return (
            <>
            <CreatePost />
            </>
        )
    }

}