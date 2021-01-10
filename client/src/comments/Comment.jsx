import React from 'react';
import {Toast} from 'react-bootstrap';

export default function Comment() {
    return (
        <Toast className="bg-dark mx-auto">
            <Toast.Header closeButton={false} className="bg-dark">
                <strong className="mr-auto"># USERNAME</strong>
                <small>20 20 20 15 15 15</small>
            </Toast.Header>
            <Toast.Body>
                Hello, world! This is a toast message.
                Hello, world! This is a toast message.
                Hello, world! This is a toast message.
            </Toast.Body>
        </Toast>
    )
}
