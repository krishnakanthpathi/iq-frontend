import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

const ActiveDoudts = (props) => {
    const themeclass = props.theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
    const themeclasstable = props.theme === 'dark' ? 'table-dark' : 'table-light';
    return (
        <>
            <div className={"container  mt-4 p-4 " + themeclass}>

                <h1 className="text-center ">Active Doubts</h1>

                <table className={"table table-striped mt-4 " + themeclasstable}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Doubt 1</td>
                            <td>
                                <p>This is a sample doubt description.</p>
                            </td>
                            <td>
                                <Link className="btn btn-primary m-2" to="/doubts/view">View</Link>
                                <button className="btn btn-success m-2">Pick Doubt</button>
                            </td>
                        </tr>

                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ActiveDoudts;