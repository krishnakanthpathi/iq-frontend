import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Problems = (props) => {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                // Fetch problems from the server
                const response = await axios.get(`${props.url}/problems`);
                setProblems(response.data.problems);
            } catch (error) {
                console.error('Failed to fetch problems:', error);
                alert('Failed to fetch problems' , error);
            }
        };

        fetchProblems();
    }, []);

    const problemsJSX = problems.map((problem, index) => (
        <tr key={problem._id}>
            <th scope="row">{index + 1}</th>
            <td>{problem.title}</td>
            <td>
                <Link className="btn btn-primary" to={`/problems/view/${problem._id}`}>View</Link>
            </td>
        </tr>
    ));

    return (
        <div className="container mt-4 p-4 " data-bs-theme={props.theme}>
            <h1 className="text-center">Problems</h1>
            <table className="table table-striped mt-4 ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {problemsJSX}
                </tbody>
            </table>
        </div>
    );
};

export default Problems;
