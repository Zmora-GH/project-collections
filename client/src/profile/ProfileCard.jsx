import React from 'react';
import {Card, Col, Row, Badge, Table } from 'react-bootstrap';
import {ColorContext} from '../core/context';

import ColorModeSwitchButton from './ColorModeSwitchButton';
import LanguageSwitchButton from './LanguageSwitchButton';

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
                                    <td> {props.t('profile_email')}: </td>
                                    <td>{props.userData.email} </td>
                                </tr>
                                <tr>
                                    <td> {props.t('profile_joined')}: </td>
                                    <td> {new Date(props.userData.created).toLocaleDateString()} </td>
                                </tr>
                                <tr>
                                    <td> {props.t('profile_collections')}: </td>
                                    <td> {props.userData.collections.length} </td>
                                </tr>
                                <tr>
                                    <td> {props.t('profile_status')}: </td>
                                    {props.userData.status ?
                                    <td><Badge variant="danger">{props.t('profile_banned')}</Badge></td>
                                    :
                                    <td><Badge variant="success">{props.t('profile_alive')}</Badge></td>
                                    }
                                </tr>
                            </tbody>
                        </Table>
                        <Row>
                            <Col>
                                <ColorModeSwitchButton
                                    togleColormode={togleColormode}
                                    colormode={colormode}
                                    user={props.userData._id}/>
                            </Col>
                            <Col>
                                <LanguageSwitchButton
                                    i18n={props.i18n}
                                    t={props.t}
                                    user={props.userData._id}/>
                            </Col>
                        </Row>
                        </Col>
                    </Card.Body>
                </Card>
            </div>
            )}
        </ColorContext.Consumer>
    )
}
