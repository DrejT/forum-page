import { useFetcher } from "react-router-dom"

const CreateSection = () => {
  const fetcher = useFetcher();
  return (
    <>
    <fetcher.Form method="post" action=""> 
      <label htmlFor="sectionName">Section name</label>
      <input type="text" name="sectionName" />
      <button type="submit">Create</button>
    </fetcher.Form>
    </>
  );
}

export default CreateSection