import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SidebarContext from '../context/sidebarContext';
import './styles.css';

const Sidebar = () => {
    // const [currentPage, setCurrentPage] = useState({ feed: 'sidebar hidden', pictures: 'sidebar hidden', profile: 'sidebar hidden',  landing: 'sidebar landing', devpeek: 'sidebar hidden' });
    const { sidebarStyle, setSidebarStyle } = useContext(SidebarContext);

    const onHoverIn = (e) => {
        // console.log('in')
        // setSidebarStyle({ feed: 'sidebar feed', pictures: 'sidebar pictures', profile: 'sidebar profile',  landing: 'sidebar landing', devpeek: 'sidebar devpeek' })
    }

    const onHoverOut = (e) => {
        // console.log("out mama");
        // setSidebarStyle({ feed: 'sidebar feed', pictures: 'sidebar hidden', profile: 'sidebar hidden',  landing: 'sidebar hidden', devpeek: 'sidebar hidden' });
    }

    const onLogout = () => {
        setSidebarStyle('landing');
        localStorage.setItem('jwt-auth-token', null);

    }

    return (
        <div className="sidebar" onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
            <div className="sidebar-heading">
                <strong>Snaip</strong>
            </div>
            {sidebarStyle === 'landing' ? (
                <div className="m-1 mt-5">
                    <Link to="/">
                        <div className="sidebar-option">
                            Login
                        </div>
                    </Link>
                    <Link to="/devpeek">
                        <div className="sidebar-option">
                            Dev Peek
                        </div>
                    </Link>
                </div>
            ) : (
                <div className="m-1 mt-5">
                    <Link to="/feed">
                        <div>
                            Feed
                        </div>
                    </Link>
                    <div>
                        <Link to="/pictures">Picture</Link>
                    </div>
                    <div>
                        <Link to="/profile">Profile</Link>
                    </div>
                    <div>
                        <Link onClick={onLogout} to="/">Logout</Link>
                    </div>
                    <div>
                        <Link to="/devpeek">Dev Peek</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sidebar;