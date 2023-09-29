import { Link } from "react-router-dom"

export default function Forum({ sectionList }) {
    console.log(sectionList)
    return (
        <>
            {
                sectionList.map((sectionObj) => {
                    return (
                        <div key={sectionObj._id}>
                            <details>
                                <summary>{sectionObj.name}</summary>
                                {
                                    sectionObj.thread.map((threadObj) => {
                                        return <p key={"t/" + threadObj._id}>
                                            <Link to={"t/" + threadObj.slug}>{threadObj.title}</Link>
                                        </p>
                                    })
                                }
                            </details>
                        </div>
                    )
                })
            }
        </>
    )
}