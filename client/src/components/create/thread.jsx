import { useFetcher } from "react-router-dom"
import getSectionList from "../../hooks/getsectionlist";

const CreateThread = () => {
  const fetcher = useFetcher();
  const sectionList = getSectionList();  
  return (
    <>
      <h3>Thread Form (Admins only)</h3>
      <div>
        <fetcher.Form method="post" action="/api/thread">
          <label htmlFor="threadName">Thread name</label>
          <input type="text" name="threadName" />
          <label htmlFor="threadDesc">Thread description</label>
          <input type="text" name="threadDesc" />
          <label htmlFor="sectionName">Section name</label>
          <select name="sectionName">
            {sectionList.map((sectionObj) => (
              <option key={sectionObj._id} value={sectionObj.name}>
                {sectionObj.name}
              </option>
            ))}
          </select>
          <input type="hidden" name="formtype" value="post" />
          <button type="submit">Create</button>
        </fetcher.Form>
      </div>
    </>
  )
}

export default CreateThread