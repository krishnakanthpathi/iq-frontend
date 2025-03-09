import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

const Problems = () => {
    return (
        <>
            <div className="container  mt-4 p-4">

                <h1 className="text-center ">Problems</h1>

                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Problem 1</td>
                            <td>
                                <Link className="btn btn-primary" to="/problems/view">View</Link>
                                {/* <button className="btn btn-success m-2">Ask Doudt</button> */}
                            </td>
                        </tr>

                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Problems;