import { useFetcher } from "react-router-dom"

const CreateSection = () => {
  const fetcher = useFetcher();
  return (
    <>
    <h3>Section Form (Admins only)</h3>
    <fetcher.Form method="post" action=""> 
      <label htmlFor="sectionName">Section name</label>
      <input type="text" name="sectionName" />
      <button type="submit">Create</button>
    </fetcher.Form>
    </>
  );
}

export default CreateSection