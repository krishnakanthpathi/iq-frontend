import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {

    const handleLogout = () => {
        props.setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = "/login";
    }

    return (
        <div className="container mt-5" data-bs-theme={props.theme}>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h4>Profile</h4>
                    <Link className="btn m-1 btn-outline-danger" onClick={handleLogout}>Log Out</Link>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img src={props.user.avatar} alt="Profile" className="img-fluid img-thumbnail" />
                            
                        </div>
                        <div className="col-md-8 p-4">
                            <h4>{props.user.username}</h4>
                            <p>Email: {props.user.email}</p>
                            <p>Bio: {props.user.bio} </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;