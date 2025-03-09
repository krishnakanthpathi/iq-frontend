import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewProblem = () => {
    const title = "Sample Problem Title";
    const description = "This is a sample problem description.";
    const difficulty = "Medium";
    const tags = ["Array", "String", "Dynamic Programming"];

    return (
        <div className="container mt-4 p-4">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">{title}</h1>
                    <p className="card-text">{description}</p>
                    <div className="mb-3">
                        <h3>Difficulty</h3>
                        <p>{difficulty}</p>
                    </div>
                    <div className="mb-3">
                        <h3>Tags</h3>
                        <p>{tags.join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProblem;
