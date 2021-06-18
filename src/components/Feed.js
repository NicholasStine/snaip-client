import React, { useEffect, useContext } from 'react';
import sidebarContext from '../context/sidebarContext';

const Feed = () => {
    const { sidebarStyle, setSidebarStyle } = useContext(sidebarContext);

    useEffect(() => {
        console.log(sidebarStyle);
        setSidebarStyle({ feed: 'sidebar feed', pictures: 'sidebar hidden', profile: 'sidebar hidden',  landing: 'sidebar hidden', devpeek: 'sidebar hidden' });
    });

    return (
        <div>
            <p>Feed Page</p>
        </div>
    )
}

export default Feed;