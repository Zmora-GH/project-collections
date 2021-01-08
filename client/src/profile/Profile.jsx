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
                setCollections(res.data);
            })
            .catch((err)=>{console.log(err)})
        }

    }, [])
    console.log(collections);
    return (
        <div>
            <ProfileCard username={profileUserName} isAuth={isAdmin || profileUserName === username}/>
            <Card>
                <Card.Header as="h5">Collections:</Card.Header>
                <Card.Body>
                    <Button
                        variant="success"
                        as="a"
                        href= {`/collection/create/${profileUserName}`}
                        >Create new collection</Button>
                </Card.Body>
                <Card.Body>
                    <Table size="sm" striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Theme</th>
                                <th>Items</th>
                                <th>Created</th>

                            </tr>
                        </thead>
                        <tbody>
                            { collections.map( (coll, index) => {
                                return <TableRowCollection  data={coll} key={index}/>
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    )
}
