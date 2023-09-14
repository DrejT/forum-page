import { useFetcher } from "react-router-dom"

const CreateThread = () => {
  const fetcher = useFetcher()
  return (
    <>
    <div>
    <fetcher.Form method="post" action=""> 
      <label htmlFor="threadName">Thread name</label>
      <input type="text" name="threadName" />
      <label htmlFor="SectionName">section Name</label>
      <input type="text" name="sectionName" />
      <button type="submit">Create</button>
    </fetcher.Form>
    </div>
    </>
  )
}

export default CreateThread