import {  useFetcher } from "react-router-dom"

const CreateSection = () => {
  const fetcher = useFetcher();
  // console.log(fetcher.formAction)
  return (
    <>
      <h3>Section Form (Admins only)</h3>
      <fetcher.Form method="post" action="/api/section">
        <label htmlFor="sectionName">Section name</label>
        <input type="text" name="sectionName" />
        <input type="hidden" name="formtype" value="post" />
        <button type="submit">Create</button>
      </fetcher.Form>
      <div>
        {
          fetcher.state === "submitting" ? <>submitting form</> :
          fetcher.data !== undefined ? <>{fetcher.data.message}</> :
          <></>
        }
      </div>
    </>
  );
}

export default CreateSection