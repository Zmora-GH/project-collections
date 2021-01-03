import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Card, Row, Col, Image} from 'react-bootstrap';
import axios from 'axios';
//import {AuthContext} from '../core/context';

import TableRowCollection from './TableRowCollection';

export default function ProfileCard(props) {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        created: ""})

    useEffect(() => {
        axios.post('/api/profile', { "username": props.username})
        .then((res)=>{
            setUserData(res.data.userdata)
        })
        .catch((err)=>{console.log(err)})
    }, [])

    return (
        <div>
            <Card>
                <Card.Header as="h5">Profile:</Card.Header>
                <Card.Body>
                    <Row><Col><Row>
                        <Col><span>{userData.username}</span></Col>
                    </Row><Row>
                        <Col><span>{userData.email}</span></Col>
                    </Row></Col><Col><Row>
                    </Row><Row>
                        <Col><span>JOINED</span></Col>
                        <Col><span>{new Date(userData.created).toLocaleDateString()}</span></Col>
                    </Row></Col><Col><Row>
                        <Col><span>DATA ?:</span></Col>
                        <Col><span>IMG</span></Col>
                    </Row><Row>
                        <Col><span>DATA ?</span></Col>
                        <Col><span>##############</span></Col>
                    </Row></Col></Row>
                </Card.Body>
            </Card>
        </div>
    )
}
