import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    
    const changeTheme = () => {
        const newTheme = props.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        props.setTheme(newTheme);
    }

    

    return (
        <>  
            <nav className="navbar navbar-expand-lg " data-bs-theme={props.theme}>
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">
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
                                <Link className="nav-link" to="/doubts/active">
                                    Doubts
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
                        {/* right most */}
                        <div className="d-flex" role="search">

                            {!props.user && <>
                            <Link className="btn m-1 btn-outline-success" to="/login">Log In</Link>
                            <Link className="btn m-1 btn-outline-warning" to="/register">Sign Up</Link>
                            </> }
                            
                            {props.user && <>
                                <Link className="p-1" to="/profile" >
                                <img src={props.user.avatar} alt="Profile" className='rounded-circle' width={40} height={40}  /> </Link>
                            </> }

                            <Link 
                            className={props.theme == "light" ? "btn m-1 btn-dark" : "btn m-1 btn-light" }
                            onClick={changeTheme} to="#">
                                <i className={props.theme == "light" ? "bi bi-moon "  : "bi bi-sun" }></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
