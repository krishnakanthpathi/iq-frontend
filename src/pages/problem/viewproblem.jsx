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
        tags: [],
        token : ''
    });
    const [solution, setSolution] = useState('');
    const [properties ,setProperties] = useState({
        color : "danger",
        display : "d-none",
        message : "Hi" ,
        category : "hi"
    })


    useEffect(() => {
        try {
            const fetchProblem = async () => {
                const params = window.location.pathname.split('/');
                const id = params[params.length - 1];
                const respose = await fetch(`http://localhost:8080/api/problems/${id}`);
                const data = await respose.json();
                
                setProblem(data.problem);
                console.log('Problem:', data.problem);  

            }   
            fetchProblem();

        } catch (error) {
            console.error('Error fetching problem:', error);
        }
    }, []);

    const handleCorrect = async () => {
        const token = localStorage.getItem('token');
        
        console.log('Token:', token);
        console.log('User:', props.user._id);
        console.log('problem:', problem._id);
        
        try {
            const response = await axios.put(`http://localhost:8080/api/users/add`, {
                userId: props.user._id,
                problemId: problem._id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = response.data;
            console.log('Response:', data);
        } catch (error) {
            console.log('Failed to submit solution:', error);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        try {
            const response = await axios.post(`http://localhost:8080/api/ai/solve`, {
                    problem: JSON.stringify(problem),
                    solution: solution,
                });
    
            const data = response.data;
            console.log('Response:', data);
            if (data.data == "Correct\n") {
                setProperties({
                    color : "success",
                    display : "" ,
                    message : "Correct" ,
                    category : "Successfull"
                });
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

    return (
        <div className= "container mt-4 p-4 ">
            <div className="card"  data-bs-theme={props.theme}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="p-2">
                            <h1 className="card-title">{problem.title}</h1>
                        </div>
                        <div className="p-2">
                            
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
                        <Link className="btn m-1 btn-primary" to="/problems/ask/ai">Ask AI</Link>
                        <Link className="btn m-1 btn-warning" to="/problems/ask/doubt">Ask Doubt</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProblem;
