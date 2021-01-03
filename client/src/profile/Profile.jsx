import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import {Table, Button, Card, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {AuthContext} from '../core/context';

import ProfileCard from './ProfileCard';
import TableRowCollection from './TableRowCollection';

export default function Profile(props) {
    const { profileUserName } = useParams()
    const [collections, setCollections] = useState([])
    const {isAuth, isAdmin, username} = useContext(AuthContext);

    useEffect(() => {
        if (isAdmin || profileUserName === username) {
            axios.post('/api/profile/collections', { "username": profileUserName})
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{console.log(err)})
        }

    }, [])

    return (
        <div>
            <ProfileCard username={profileUserName} isAuth={isAdmin || profileUserName === username}/>
            <Card>
                <Card.Header as="h5">Collections:</Card.Header>
                <Card.Body>
                    <Table size="sm" striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>DATA #</th>
                                <th>DATA #</th>
                                <th>DATA #</th>
                                <th>DATA #</th>
                                <th>DATA #</th>
                                <th>DATA #</th>
                                <th>DATA #</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRowCollection />
                            <TableRowCollection />
                            <TableRowCollection />
                            <TableRowCollection />
                            <TableRowCollection />
                            <TableRowCollection />
                            <TableRowCollection />
                            <TableRowCollection />
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    )
}
