import React, {useContext} from 'react';
import {CardColumns,Card, Row, Col} from 'react-bootstrap';

import {AuthContext} from '../core/context';
import ItemPrev from './ItemPrev';

export default function ItemList() {
    const {isAuth, isAdmin} = useContext(AuthContext);

    return (
        <Card className="my-1 pt-3 border-secondary bg-light">
            <Card.Title className="ml-3">All items with "TAG/SEARCH": </Card.Title>
            <Card.Body>
                <Row>
                <Col lg={4}>
                    <ItemPrev />
                    <ItemPrev />
                    <ItemPrev />
                    <ItemPrev />
                </Col>
                <Col lg={4}>
                    <ItemPrev />
                    <ItemPrev />
                    <ItemPrev />
                    <ItemPrev />
                </Col>
                <Col lg={4}>
                    <ItemPrev />
                    <ItemPrev />
                    <ItemPrev />
                </Col>
                </Row>
            </Card.Body>
        </Card>

    )
}
