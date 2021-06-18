import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SidebarContext from '../context/sidebarContext';
import UserContext from '../context/userContext';
import axios from 'axios';

const Login = () => {
    const history = useHistory();
    const { sidebarStyle, setSidebarStyle } = useContext(SidebarContext);
    const { userData, setUserData } = useContext(UserContext);
    const [loginForm, setLoginForm] = useState({});

    function onloginChange(e) {
        setLoginForm({...loginForm, [e.target.name]: e.target.value});
    }

    const onlogin = async (e) => {
        e.preventDefault();

        const loginData = await axios.post(`${process.env.REACT_APP_API}/user/login`, {...loginForm});
        console.log(loginData.data);
        if (loginData.data) {
            localStorage.setItem('jwt-auth-token', loginData.data.token);
            setUserData({ user_id: loginData.data.user_id });
            setSidebarStyle('feed');
            return history.push('/feed');
        }
    }

    return (
        <div>
            <p value={{sidebarStyle, userData}}>Sign Up Page</p>
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