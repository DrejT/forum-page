import CreateSection from "./section";
import CreatePost from "./post"
import CreateThread from "./thread"

export default function Create({ role }) {
    if (role === "admin") {
        return (
            <>
                <CreateSection />
                <CreateThread />
                <CreatePost />
            </>
        )
    } else {
        return (
            <>
                <CreatePost />
            </>
        )
    }

}