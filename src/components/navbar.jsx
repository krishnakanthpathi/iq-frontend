import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                       {`< 🧠 IQ />`}
                    </Link>

                    {/* toggle */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/problems">
                                    Problems
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/doubts">
                                    Doudts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/roadmaps">
                                    Roadmaps
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true" to="#">
                                    * Admin / Student
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <Link className="btn m-1 btn-outline-success" to="/login">Log In</Link>
                            <Link className="btn m-1 btn-outline-primary" to="/register">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
