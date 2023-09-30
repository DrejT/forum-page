import { useFetcher } from "react-router-dom"
import getThreadList from "../../hooks/getallthreads"

const CreatePost = ({ role }) => {
  const fetcher = useFetcher();
  const threadList = getThreadList();
  return (
    <div>
      <h3>Post Form</h3>
      <fetcher.Form method="post" action="/api/post">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="content">Content</label>
        <input type="text" name="content" />
        <label htmlFor="threadId">select thread</label>
        <select name="threadId">
          {threadList.map((threadObj) => (
            <option key={threadObj._id} value={threadObj._id}>
              {threadObj.title}
            </option>
          ))}
        </select>
        <input type="hidden" name="formtype" value="post" />
        <button type="submit">Create</button>
      </fetcher.Form>
    </div>
  )
}

export default CreatePost