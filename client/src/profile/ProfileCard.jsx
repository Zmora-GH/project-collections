import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Card, Row, Col, Image, Badge, Table} from 'react-bootstrap';
import axios from 'axios';

import TableRowCollection from './TableRowCollection';

export default function ProfileCard(props) {
    return (
        <div>
            <Card className="bg-dark text-light my-1">
                <Card.Header as="h5">
                    <span># {props.userData.username} </span>
                    {props.userData.staff ? <Badge variant="warning">admin</Badge> : ''}
                    <span className="float-right">{new Date(props.userData.created).toLocaleDateString()} </span>
                </Card.Header>
                <Card.Body>
                    <Col lg={6}>
                    <Table size='sm' variant='dark'>
                        <tbody>
                            <tr>
                                <td> Email: </td>
                                <td>{props.userData.email} </td>
                            </tr>
                            <tr>
                                <td> Joined: </td>
                                <td> {new Date(props.userData.created).toLocaleDateString()} </td>
                            </tr>
                            <tr>
                                <td> Colections: </td>
                                <td> {props.userData.collections.length} </td>
                            </tr>
                            <tr>
                                <td> Status: </td>
                                {props.userData.status ?
                                <td><Badge variant="danger">BANNED</Badge></td>
                                :
                                <td><Badge variant="success">ALIVE</Badge></td>
                                }
                            </tr>
                        </tbody>
                    </Table>
                    </Col>
                </Card.Body>
            </Card>
        </div>
    )
}
