import getThreadList from "../../hooks/getallthreads"
import { Form } from "react-router-dom";

const CreatePost = ({ role }) => {
  const threadList = getThreadList();
  return (
    <div>
      <h3>Post Form</h3>
      <Form method="post" action="/api/post">
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
        <label htmlFor="images">add images</label>
        <input type="file" name="images" accept="image/*" multiple />
        <input type="hidden" name="formtype" value="post" />
        <button className="btn" type="submit">Create</button>
      </Form>
    </div>
  )
}

export default CreatePost