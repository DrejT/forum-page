import { Form, Link, Outlet, useLoaderData } from "react-router-dom"

export default function U() {
    const queryData = useLoaderData()
    return (
        <>
            <div>
                <Form method="get">
                    <label htmlFor="username">Search</label>
                    <input type="text" name="username" placeholder="john doe" />
                    <button type="submit">search</button>
                </Form>
                <div id="search-result">
                    {queryData === null ? (
                        <></>
                    ) : queryData.message ? (
                        <>{queryData.message}</>
                    ) : (
                        <>
                        <Link to={queryData.username}>{queryData.username}</Link></>
                    )}
                </div>
            </div>
            <div id="user">
                <Outlet />
            </div>
        </>
    )
}