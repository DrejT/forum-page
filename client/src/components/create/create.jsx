import CreateSection from "./section";
import CreatePost from "./post"
import CreateThread from "./thread"

export default function Create({ role="user" }) {
    if (role === "admin") {
        return (
            <>
                <CreateSection />
                <CreateThread />
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }

}