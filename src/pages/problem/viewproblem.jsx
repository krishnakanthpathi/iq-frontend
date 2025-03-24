import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MultiTextEditor from './texteditor';
import Alert from '../../components/alert';

const ViewProblem = (props) => {

    const [loader, setLoader] = useState(false);
    
    const [problem, setProblem] = useState({
        _id: '',
        title: '',
        description: '',
        difficulty: '',
        usersSolved: [],
        submissions: [],
        tags: [],
        token : ''
    });
    const [solution, setSolution] = useState('');
    const [properties ,setProperties] = useState({
        color : "",
        display : "d-none",
        message : "" ,
        category : ""
    })
    const handleStatus = problem.usersSolved.includes(props.user._id);


    // fetching porblems description
    useEffect(() => {
        try {
            const fetchProblem = async () => {
                const params = window.location.pathname.split('/');
                const id = params[params.length - 1];
                const respose = await fetch(`${props.url}/problems/${id}`);
                const data = await respose.json();
                
                setProblem(data.problem);
                console.log('Problem:', data.problem);  

            }   
            fetchProblem();

        } catch (error) {
            console.error('Error fetching problem:', error);
        }
    }, []);

    // adding to user and problem
    const handleCorrect = async () => {
        const token = localStorage.getItem('token');
        
        // console.log('Token:', token);
        // console.log('User:', props.user._id);
        // console.log('problem:', problem._id);

        // add to users
        try {
            const response = await axios.put(`${props.url}/users/add`, {
                userId: props.user._id,
                problemId: problem._id,
                description: solution,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setProperties({
                color : "success",
                display : "" ,
                message : "Correct" ,
                category : "Successfull"
            });
        } catch (error) {
            console.log('Failed to submit solution:', error);
        }

        // add to problems
        try {
            const response = await axios.put(`${props.url}/problems/add`, {
                userId: props.user._id,
                problemId: problem._id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("success in adding to problems");
            setProblem(response.data.problem);
        }catch (error) {
            setProperties({
                color : "warning",
                display : "" ,
                message : "already solved" ,
                category : "attempted"
            })
            console.log('Failed to submit solution:', error);
        }


    }

    // submitting solution
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        try {
            const response = await axios.post(`${props.url}/ai/solve`, {
                    problem: JSON.stringify(problem),
                    solution: solution,
                });
    
            const data = response.data;
            console.log('Response:', data);
            if (data.data == "Correct\n") {
                handleCorrect(e);
                setLoader(false);
                                
            }
            else {
                setProperties({
                    color : "danger",
                    display : "" ,
                    message : "Incorrect" ,
                    category : "Unsuccessfull"
                })
                setLoader(false);
            }

        } catch (error) {
            setProperties({
                color : "danger",
                display : "" ,
                message : "something went wrong" ,
                category : "Unsuccessfull"

            })
            console.log('Failed to submit solution:', error);
        }

        console.log('Solution submitted:', solution);
    };

    // checking status
    return (
        <div className= "container mt-4 p-4 ">
            <div className="card"  data-bs-theme={props.theme}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="p-2">
                            <h1 className="card-title">{problem.title}</h1>
                        </div>
                        <div className="p-2">
                            { handleStatus && (
                                <span className="badge bg-success ms-2">Solved</span>
                            )}
                        </div>
                    </div>
                    <p className="card-text">{problem.description}</p>
                    <div className="mb-3">
                        <h3>Difficulty</h3>
                        <p>{problem.difficulty}</p>
                    </div>
                    <div className="mb-3">
                        <h3>Tags</h3>
                        <p>{problem.tags.join(', ')}</p>
                    </div>
                    <div className="mb-3">
                        <h3>Submit Solution : </h3>
                        <Alert {...properties}/>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    value={solution}
                                    onChange={(e) => setSolution(e.target.value)}
                                    placeholder="Write your solution here..."
                                    required
                                ></textarea>
                            </div>
                            {!loader && <button type="submit" className="btn btn-success mt-2">Submit Solution</button>
                            }
                            {loader &&
                                <button className="btn btn-success mt-2" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    &nbsp;Loading...
                                </button>

                            }
                        </form>
                    </div>
                    <div className="mb-3">
                        <h3>Actions</h3>
                        {/* <Link className="btn m-1 btn-primary" to="/problems/ask/ai">Ask AI</Link> */}
                        <Link className="btn m-1 btn-warning" to={"/problems/ask/doubt/"+problem._id}>Ask Doubt</Link>
                    </div>
                </div>
            </div>
            
            {/* submissions */}

            {/* <div className="card mt-4" data-bs-theme={props.theme}>
                <div className="card-body">
                    <h3 className="card-title">Submissions</h3>
                    <ul className="list-group">
                        {problem.submissions && problem.submissions.length > 0 ? (
                            problem.submissions.map((submission, index) => (
                                <li key={index} className="list-group-item">
                                    <p><strong>Submitted by:</strong> {submission.user}</p>
                                    <p><strong>Solution:</strong> {submission.solution}</p>
                                    <p><strong>Status:</strong> {submission.status}</p>
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item">No submissions yet.</li>
                        )}
                    </ul>
                </div>
            </div> */}
        </div>
    );
}

export default ViewProblem;
