import { useFetcher } from "react-router-dom"

export default function GetAllThreads({ user }) {
    const fetcher = useFetcher();
    console.log(user);
    return (
        <>
            {
                user.thread.map((thread) => {
                    let threadSection;
                    user.section.map((section) => {
                        if (section.thread.includes(thread._id))
                        threadSection = section.name;
                    });
                    console.log(threadSection)
                    return (
                        <div key={thread._id} style={{ "border": "solid" }}>
                            <p>title: {thread.title}</p>
                            <p>description: {thread.description}</p>
                            <p>section: {threadSection}</p>
                            <fetcher.Form action="/api/thread" method="post">
                                <label htmlFor="newThreadName">new name</label>
                                <input name="newThreadName" type="text" />
                                <input name="threadId" type="hidden" value={thread._id} />
                                <input name="formtype" type="hidden" value={"patch"} />
                                <button type="submit">edit name</button>
                            </fetcher.Form>
                        </div>
                    )
                })
            }
        </>
    )
}