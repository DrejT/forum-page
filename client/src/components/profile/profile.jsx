import Display from "./display"

export default function Profile({loggedin, userData}){
    if (loggedin){
        // display the profile with create functionality
        return (
            <>
            <Display viewer="user" userData={userData}/>
            </>
        )
    } else {
        // display only as a view
        return (
            <>
            <Display viewer="guest"/>
            </>
        )
    }
}