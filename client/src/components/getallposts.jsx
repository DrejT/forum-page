import { useActionData, useSubmit } from "react-router-dom"

export default function GetAllPosts({user}){
    const submit = useSubmit();
    submit(user, {
        method: "post",
        action: "/api/post",
      });
    const actionData = useActionData()
    
    return (
        <>

        </>
    )
}