import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const DevPeek = ({ google }) => {
    const [pythonRes, setPythonRes] = useState({});
    const [latLon, setLatLon] = useState({ lat: "", lon: "" });

    // Python HTTP.WebServer
    const retrievePythonData = async () => {
        const { data } = await axios.get("http://localhost:8086/")
        console.log(data);
        setPythonRes({ ...data });
    }

    useEffect(() => {
        retrievePythonData();
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos);
            setLatLon({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        });
    }, []);

    return (
        <div>
            <p>Dev Peek Page</p>
            <p>this page was written in json, but the following values are from a python http.webserver</p>
            {pythonRes.Watta}
            {pythonRes.Lotta}
            <div>
                <p>Lat and Lon Data</p>
                ({latLon.lat},
                {latLon.lon})
            </div>
            <div>
                <p>Google Maps API</p>
                <Map
                    google={google}
                    zoom={14}
                    style={{ width: '500px', height: '500px' }}
                    initialCenter={{ lat: latLon.lat, lng: latLon.lon }}
                />
            </div>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCCkjbqj16O4u-OQ6WzH2hKtDzZ5Y5Lc_4'
})(DevPeek);