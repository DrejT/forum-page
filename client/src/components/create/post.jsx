import { useFetcher } from "react-router-dom"

const CreatePost = () => {
  const fetcher = useFetcher()
  return (
    <div>
      <h3>Post Form</h3>
      <fetcher.Form method="post" action="api/post"> 
      <label htmlFor="title">Title</label>
      <input type="text" name="title" />
      <button type="submit">Create</button>
    </fetcher.Form>
    </div>
  )
}

export default CreatePost