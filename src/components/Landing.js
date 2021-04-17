import React from 'react';
import Popup from 'reactjs-popup';
import SignUp from './SignUp';
import Login from './Login';

const Landing = () => {

    return (
        <div>
            <p>Landing Page</p>
            <div>
            <Popup
                modal
                trigger={<button>Sign Up</button>}>
                <SignUp />
            </Popup>
            <Popup
                modal
                trigger={<button>Login</button>}>
                <Login />
            </Popup>
            </div>
        </div>
    )
}

export default Landing;