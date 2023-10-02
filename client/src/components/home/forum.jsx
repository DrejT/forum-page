import { Link } from "react-router-dom"

export default function Forum({ sectionList }) {
    return (
        <>
            <div className="">
                {
                    sectionList.map((sectionObj) => {
                        return (
                            <div key={sectionObj._id} className="">
                                <div className="">
                                    <details className="p-1" open>
                                        <summary className="bg-slate-800">
                                            <h3>{sectionObj.name}</h3>
                                        </summary>
                                        <div className="">
                                            {
                                                sectionObj.thread.map((threadObj) => {
                                                    return (
                                                        <p key={"t/" + threadObj._id}>
                                                            <Link to={"t/" + threadObj.slug}>{threadObj.title}</Link>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </details>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}