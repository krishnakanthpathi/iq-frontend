import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  axios from 'axios';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoader(true);
            const response = await axios.post('http://localhost:8080/api/users/login', 
                { email, password }
            );
            const token = response.data.token;

            window.location = '/profile';
            
            localStorage.setItem('user', JSON.stringify(response.data.data));
            localStorage.setItem('login', true);
            localStorage.setItem('token', response.data.token);

            props.setUser(response.data); // set user asynchronus func
            console.log(props.user);

        } catch (error) {
            console.log('Invalid email or password ' + error);
        }
        console.log('Email:', props);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="form-group">
                    <label>Email :</label>
                    <input
                        type="text"
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
                {!loader && 
                <button type="submit" className="btn btn-primary btn-block mt-3">Login</button> }

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

export default Login;