import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [signUpForm, setSignUpForm] = useState({});

    function onSignUpChange(e) {
        setSignUpForm({...signUpForm, [e.target.name]: e.target.value});
    }

    const onSignUp = async (e) => {
        e.preventDefault();

        await axios.post(`${process.env.REACT_APP_API}/user`, {...signUpForm});
    }

    return (
        <div>
            <p>Sign Up Page</p>
            <form className="form" onSubmit={onSignUp}>
                <div>
                    <label>Email</label>
                    <input 
                    name="email"
                    type="text"
                    onChange={onSignUpChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                    name="password"
                    type="text"
                    onChange={onSignUpChange} />
                </div>
                <div>
                    <label>Handle</label>
                    <input 
                    name="handle"
                    type="text"
                    onChange={onSignUpChange} />
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;