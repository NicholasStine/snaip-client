import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleApiWrapper } from 'google-maps-react';

import SocketIO from './SocketIO';
import CanvasComponent from './CanvasComponent';
import EscapeVerification from './EscapeVerification';
import CSVvisualizer from './CSVvisualizer';
import ControlledCheckboxes from './ControlledCheckboxes';
import MinesweeperBot from './MinesweeperBot';
import TfCNN from './TfCNN';
import PIController from './PIController';

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
        <div style={{ height: '100vh', overflowY: 'scroll' }}>
            <div>
                <p>Dev Peek Page</p>
                <div className="card p-3 my-2">
                    <PIController />
                </div>
                <div className="card p-3 my-2">
                    <strong className="h2">Tensorflow CNN</strong>
                    <p>A Tensorflow CNN that trains on a video and saves output from multiple convolutional and pooling layers as new video files</p>
                    <TfCNN />
                </div>
                <div className="card p-3 my-2">
                    <strong>Minesweeper Bot</strong>
                    <MinesweeperBot />
                </div>
                <div className="card p-3 my-2">
                    <ControlledCheckboxes />
                </div>
                <div className='card p-3 my-2'>
                    <strong>CSV Visualizer</strong>
                    <p>
                        When my computer slows down, my first instinct is to check the disk analyzer, which
                        visualizes the usage of space by folder, so larger folders take up more space on a
                        cool looking pie chart. I want to duplicate this, row by row with different columns 
                        represented in different colors in the fancy pie chart, and each row split into it's
                        own image.
                    </p>
                    <br/>
                    <p>
                        I also like options, so there should eventually be controls for how the data is vizualized,
                        and also how it's analyzed. Does the user want 1 image with the average of all rows?
                        Does the user want to exclude some rows or columns? How should each row be visualized?
                        This is where we could do a point map with different sized dots, radial shapes, squares, 
                        triangles, octagonz, the workz!
                    </p>
                    <CSVvisualizer />
                </div>
                <div className='card p-3 my-2'>
                    <strong>string break handler for js inputs</strong>
                    <p>
                        On a separate project, while the client was testing, they entered someone's
                        height with ' for feet and " for inches. In the PostgresDB, an error was thrown
                        after the ' character, prompting the need for a modular input filter that can be 
                        applied to any form.
                    </p>
                    <EscapeVerification />
                </div>
                <div className='card p-3 my-2'>
                    <strong>Python API</strong>
                    <p>this page was written in JavaScript, but the following values are from a python http.webserver</p>
                    {pythonRes.Watta}
                    {pythonRes.Lotta}
                    <div>
                        <p>Lat and Lon Data</p>
                        ({latLon.lat},
                        {latLon.lon})
                    </div>
                </div>
                <div className='card p-3 my-2'>
                    <p>Google Maps API</p>
                    <p>
                        The map isn't currently implemented so it's not show here.
                    </p>
                    {/* <Map
                        google={google}
                        zoom={14}
                        style={{ width: '500px', height: '500px' }}
                        initialCenter={{ lat: latLon.lat, lng: latLon.lon }}
                    /> */}
                </div>
                <div className="d-flex">
                    <div className="card p-3 my-2" style={{ marginTop: '50px', width: '200px' }}>
                        <strong>Three.js Development</strong>
                        <p>every time you click on this box (a webGL canvas) it will redraw a list of length: length + 1, each point drawn in random positions. The length + 1 is to add 1 to the number of points "re-drawn" in random order every time you click.</p>
                        <CanvasComponent />
                    </div>
                    <div className="card p-3 my-2">
                        <strong>Socket.IO</strong>
                        {/* <SocketIO /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCCkjbqj16O4u-OQ6WzH2hKtDzZ5Y5Lc_4'
})(DevPeek);