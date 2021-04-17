import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="m-1">
                <p>Snaip</p>
                <div>
                    <Link to="/feed">Feed</Link>
                </div>
                <div>
                    <Link to="/pictures">Picture</Link>
                </div>
                <div>
                    <Link to="/profile">Profile</Link>
                </div>
                <div>
                    <Link to="/">Logout</Link>
                </div>
                <div>
                    <Link to="/devpeek">Dev Peek</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;