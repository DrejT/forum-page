import { Link } from "react-router-dom"

export default function Forum({ sectionList }) {
    return (
        <>
            <div className="px-20">
                {
                    sectionList.map((sectionObj) => {
                        return (
                            <div key={sectionObj._id} className="">
                                <div className="">
                                    <details className="py-3" open>
                                        <summary className="bg-slate-800">
                                            <h3>{sectionObj.name}</h3>
                                        </summary>
                                        <div className="px-5">
                                            {
                                                sectionObj.thread.map((threadObj) => {
                                                    return (
                                                        <div className="" key={"t/" + threadObj._id}>
                                                            <p>
                                                                <Link to={"t/" + threadObj.slug}>{threadObj.title}</Link>
                                                            </p>
                                                        </div>
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