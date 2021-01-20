import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import {Table, Button, Card} from 'react-bootstrap';
import axios from 'axios';
import {AuthContext, ColorContext} from '../core/context';

import ProfileCard from './ProfileCard';
import TableRowCollection from './TableRowCollection';

export default function Profile(props) {
    const { profileUserName } = useParams()
    const {isAdmin, username} = useContext(AuthContext);
    const [profile, setProfile] = useState({
        userdata: {
            username: "",
            email: "",
            created: "",
            collections: []
        },
        collections: []
    })

    useEffect(() => {
        if (isAdmin || profileUserName === username) {
            axios.post('/api/profile', { "username": profileUserName})
            .then((res)=>{
                setProfile({userdata: res.data.userdata, collections: res.data.collections})
            })
            .catch((err)=>{console.log(err)})
        } else {
            window.location.replace('/')
        }

    }, [])

    return (
        <ColorContext.Consumer>
            {({colormode}) => (
            <div>
                <ProfileCard userData={profile.userdata}/>
                <Card className= {`${colormode.asClasses} my-1`}>
                    <Card.Header as="h5">Collections:</Card.Header>
                    <Card.Body>
                        <Table size="sm" bordered hover responsive variant={colormode.table}>
                            <thead>
                                <tr>
                                    <th colSpan="7">
                                        <Button
                                            className="my-2"
                                            variant="outline-success"
                                            as="a"
                                            href={`/collection/create/${profileUserName}`}
                                            >Create new collection</Button>
                                    </th>
                                </tr>
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
                                { profile.collections.map( (coll, index) => {
                                    return <TableRowCollection  data={coll} key={index}/>
                                })}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
            )}
        </ColorContext.Consumer>
    )
}
