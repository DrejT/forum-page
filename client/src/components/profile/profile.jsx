import Display from "./display"

export default function Profile({ loggedin, userData }) {
    return (
        <>
            <Display viewer={loggedin ? "user" : "guest"} userData={userData} />
        </>
    )
}