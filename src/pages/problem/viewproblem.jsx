import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MultiTextEditor from './texteditor';

const ViewProblem = (props) => {
    
    const [problem, setProblem] = useState({
        _id: '',
        title: '',
        description: '',
        difficulty: '',
        tags: [],
        token : ''
    });
    const [solution, setSolution] = useState('');

    useEffect(() => {
        // Fetch problem details from API
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
            console.error('Failed to submit solution:', error);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8080/api/ai/solve`, {
                    problem: JSON.stringify(problem),
                    solution: solution,
                });
    
            const data = response.data;
            console.log('Response:', data);
            if (data.data == "Correct\n") {
                handleCorrect(e);
            }

        } catch (error) {
            console.error('Failed to submit solution:', error);
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
                        <h3>Submit Solution</h3>
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
                            <button type="submit" className="btn btn-success mt-2">Submit Solution</button>
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
