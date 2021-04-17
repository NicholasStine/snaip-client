import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DevPeek = () => {
    const [pythonRes, setPythonRes] = useState({});

    const retrievePythonData = async () => {
        const { data } = await axios.get("http://localhost:8086/")
        console.log(data);
        setPythonRes({ ...data });
    }

    useEffect(() => {
        retrievePythonData();
    }, []);

    return (
        <div>
            <p>Dev Peek Page</p>
            <p>this page was written in json, but the following values are from a python http.webserver</p>
            {pythonRes.Watta}
            {pythonRes.Lotta}
        </div>
    )
}

export default DevPeek;