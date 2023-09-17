
export default function GetAllSections({ user }) {
    return (
        <>
            {
                user.section.map((sec) => {
                    return (
                        <div key={sec._id}>
                            <p>{sec.name}</p>
                            {/* <h6>{sec.authorId}</h6> */}
                        </div>
                    )
                })
            }
        </>
    )
}