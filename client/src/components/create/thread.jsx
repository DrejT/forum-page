import { useEffect, useState } from "react";
import { useFetcher, useSubmit } from "react-router-dom"

const SERVER_ADDRESS = "http://localhost:3000/"

const CreateThread = () => {
  const fetcher = useFetcher();

  const [sectionList, setSectionList] = useState([]);

  async function fetchSectionList(){
    const data = await fetch(SERVER_ADDRESS+"section");
    const sectionList = await data.json();
    return setSectionList(sectionList);
  }

  useEffect(() => {
    fetchSectionList()
  }, [])
  console.log(sectionList)
  return (
    <>
      <h3>Thread Form (Admins only)</h3>
      <div>
        <fetcher.Form method="post" action="/api/thread">
          <label htmlFor="threadName">Thread name</label>
          <input type="text" name="threadName" />
          <label htmlFor="SectionName">Section name</label>
          <select name="sectionName">
            {
              sectionList.map((sectionObj) => {
                return (
                  <>
                  <option value={sectionObj.name}>{sectionObj.name}</option>
                  </>
                )
              })
            }
          </select>
          <button type="submit">Create</button>
        </fetcher.Form>
      </div>
    </>
  )
}

export default CreateThread