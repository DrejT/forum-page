import { useFetcher } from "react-router-dom"
import getSectionList from "../hooks/getsectionlist";

export default function GetAllThreads({ user }) {
    const fetcher = useFetcher();
    const sectionList = getSectionList();
    return (
        <>
            {
                user.thread.map((thread) => {
                    let threadSection;
                    user.section.map((section) => {
                        if (section.thread.includes(thread._id))
                            threadSection = section.name;
                    });
                    return (
                        <div key={thread._id} style={{ "border": "solid" }}>
                            <p>title: {thread.title}</p>
                            <p>description: {thread.description}</p>
                            <p>section: {threadSection}</p>
                            <fetcher.Form action="/api/thread" method="patch">
                                <label htmlFor="newThreadName">new name</label>
                                <input name="newThreadName" type="text" />
                                <label htmlFor="newThreadDesc">new description</label>
                                <input name="newThreadDesc" type="text" />
                                <label htmlFor="newSectionName">Section name</label>
                                <select name="newSectionName">
                                    {sectionList.map((sectionObj) => (
                                        <option key={sectionObj._id} value={sectionObj.name}>
                                            {sectionObj.name}
                                        </option>
                                    ))}
                                </select>
                                <input name="threadId" type="hidden" value={thread._id} />
                                <input name="formtype" type="hidden" value={"patch"} />
                                <button type="submit">edit thread</button>
                            </fetcher.Form>
                        </div>
                    )
                })
            }
        </>
    )
}