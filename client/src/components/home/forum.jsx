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
                                <p>
                                {
                                    sectionObj.thread.map((threadObj) => {
                                        <p key={threadObj._id}>
                                            <Link to={threadObj.slug}>{threadObj.title}</Link>
                                        </p>
                                    })
                                }
                                </p>
                                
                            </details>
                        </div>
                    )
                })
            }
        </>
    )
}