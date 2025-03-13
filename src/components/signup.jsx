import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [loader, setLoader] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatar(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoader(true);
            const response = await axios.post('http://localhost:8080/api/users/register', 
                { username, avatar, email, password, bio, isAdmin: true }
            );
            console.log(response);
            // window.location = '/login';

        } catch (error) {
            console.log('Signup failed: ' + error);
        }
        setLoader(false);
        setUsername('');
        setAvatar('');
        setEmail('');
        setPassword('');
        setBio('');
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Sign Up</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="form-group">
                    <label>Username: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        aria-describedby="basic-addon2"
                        required
                        data-bs-theme={props.theme}
                    />
                </div>
                
                <div className="form-group">
                    <label>Avatar:</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={handleImageChange}
                        data-bs-theme={props.theme}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        data-bs-theme={props.theme}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        data-bs-theme={props.theme}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Bio:</label>
                    <textarea
                        className="form-control"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        data-bs-theme={props.theme}
                    />
                </div>
                {!loader && 
                <button type="submit" className="btn btn-primary btn-block mt-3">Sign Up</button> }

                {loader &&
                <button className="btn btn-primary mt-3" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
                    &nbsp;Loading...
                </button>
                }
            </form>
        </div>
    );
};

export default Signup;