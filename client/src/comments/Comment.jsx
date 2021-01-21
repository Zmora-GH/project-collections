import React from 'react';
import {Toast} from 'react-bootstrap';

export default function Comment(props) {
    return (
        <Toast className={"mx-auto" + props.colormode.asClasses}>
            <Toast.Header closeButton={false} className={props.colormode.asClasses}>
                <span className="w-100">
                <span className="float-right text-muted">{ new Date(props.data.created).toLocaleDateString()}</span>
                <strong className="float-left"># {props.data.user.username.toUpperCase()}</strong>
                </span>
            </Toast.Header>
            <Toast.Body>
                {props.data.text}
            </Toast.Body>
        </Toast>
    )
}
