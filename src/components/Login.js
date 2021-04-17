import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [loginForm, setLoginForm] = useState({});

    function onloginChange(e) {
        setLoginForm({...loginForm, [e.target.name]: e.target.value});
    }

    const onlogin = async (e) => {
        e.preventDefault();

        await axios.post(`${process.env.REACT_APP_API}/user`, {...loginForm});
    }

    return (
        <div>
            <p>Sign Up Page</p>
            <form className="form" onSubmit={onlogin}>
                <div>
                    <label>Email</label>
                    <input 
                    name="email"
                    type="text"
                    onChange={onloginChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                    name="password"
                    type="text"
                    onChange={onloginChange} />
                </div>
                <div>
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
    )
}

export default Login;