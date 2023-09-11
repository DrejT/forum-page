import { useFetcher } from "react-router-dom"

const CreateSection = () => {
  const fetcher = useFetcher();
  return (
    <>
    <fetcher.Form method="post" action="/some/route">
      <input type="text" />
      <label htmlFor="sectionName">Section name</label>
      <input type="text" name="sectionName" />
      <button type="submit">Submit</button>
    </fetcher.Form>
    </>
  );
}

export default CreateSection