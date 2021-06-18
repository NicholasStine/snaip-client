import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:8084';

const SocketIO = () => {
    const [message, setMessage] = useState("");
    var socket;

    const onSendClick = () => {
        socket.emit('dev message', message);
        console.log("Message sent");
    }

    useEffect(() => {
        socket = socketIOClient(ENDPOINT);
    })

    return (
        <div className="d-flex">
            <p>Message</p>
            <input onChange={e => setMessage(e.target.value)}/>
            <button onClick={onSendClick}>Send</button>
        </div>
    );
}

export default SocketIO;