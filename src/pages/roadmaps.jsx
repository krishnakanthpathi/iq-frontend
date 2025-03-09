import React from 'react';
import { Link } from 'react-router-dom';

const Roadmaps = () => {
    return (
        <>
            <div className="container mt-4 p-4">
                <h1 className="text-center">Roadmaps</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Frontend Developer</h5>
                                <p className="card-text">Learn HTML, CSS, JavaScript, React, and more to become a frontend developer.</p>
                                <Link to="/roadmaps/frontend" className="btn btn-primary">View Roadmap</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Backend Developer</h5>
                                <p className="card-text">Learn Node.js, Express, Databases, and more to become a backend developer.</p>
                                <Link to="/roadmaps/backend" className="btn btn-primary">View Roadmap</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Full Stack Developer</h5>
                                <p className="card-text">Combine frontend and backend skills to become a full stack developer.</p>
                                <Link to="/roadmaps/fullstack" className="btn btn-primary">View Roadmap</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmaps;