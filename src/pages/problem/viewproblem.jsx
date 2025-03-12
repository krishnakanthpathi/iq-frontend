import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ViewProblem = (props) => {
    const title = "Sample Problem Title";
    const description = "This is a sample problem description.";
    const difficulty = "Medium";
    const tags = ["Array", "String", "Dynamic Programming"];
    const [solution, setSolution] = useState('');
    const themeclass = props.theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Solution submitted:', solution);
    };

    return (
        <div className={"container mt-4 p-4 " + themeclass}>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="p-2">
                            <h1 className="card-title">{title}</h1>
                        </div>
                        <div className="p-2">
                            <span className="badge bg-success">Solved</span>
                            <span className="badge bg-secondary">In Progress</span>
                            <span className="badge bg-warning">Attempted</span>
                        </div>
                    </div>
                    <p className="card-text">{description}</p>
                    <div className="mb-3">
                        <h3>Difficulty</h3>
                        <p>{difficulty}</p>
                    </div>
                    <div className="mb-3">
                        <h3>Tags</h3>
                        <p>{tags.join(', ')}</p>
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
