import { useFetcher } from "react-router-dom"

export default function GetAllSections({ user }) {
    const fetcher = useFetcher()
    return (
        <>
            {
                user.section.map((sec) => {
                    return (
                        <div key={sec._id} style={{ "border": "solid" }}>
                            <p>{sec.name}</p>
                            <fetcher.Form method="patch" action="/api/section">
                                <label htmlFor="newSectionName">new name</label>
                                <input name="newSectionName" type="text" />
                                <input name="sectionId" type="hidden" value={sec._id} />
                                <input name="formtype" type="hidden" value={"patch"} />
                                <button type="submit">edit name</button>
                            </fetcher.Form>
                            {
                                fetcher.data != undefined ? (
                                    <>{fetcher.data.message}</>
                                ):(
                                    <></>
                                )
                            }
                        </div>
                    )
                })
            }
        </>
    )
}