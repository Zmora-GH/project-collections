import React from 'react';
import {Card, Col, Badge, Table} from 'react-bootstrap';
import {ColorContext} from '../core/context';

import ColorModeSwitchButton from './ColorModeSwitchButton'

export default function ProfileCard(props) {

    return (
        <ColorContext.Consumer>
            {({colormode, togleColormode}) => (
            <div>
                <Card className={colormode.asClasses + " my-1"}>
                    <Card.Header as="h5">
                        <span># {props.userData.username} </span>
                        {props.userData.staff ? <Badge variant="warning">admin</Badge> : ''}
                        <span className="float-right">{new Date(props.userData.created).toLocaleDateString()} </span>
                    </Card.Header>
                    <Card.Body>
                        <Col lg={6}>
                        <Table size='sm' variant={colormode.table}>
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
                        <ColorModeSwitchButton togleColormode={togleColormode} colormode={colormode} />
                    </Card.Body>
                </Card>
            </div>
            )}
        </ColorContext.Consumer>
    )
}
