import React, {useContext} from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import {useParams} from "react-router-dom";

import ItemPrev from './ItemPrev';

export default function ItemList() {
    const {tag_name} = useParams();

    return (
        <Card className="my-1 pt-3 border-secondary bg-light">
            <Card.Title className="ml-3">{`All items with "${tag_name}":`}</Card.Title>
            <Card.Body>
                <Row>
                <Col lg={4}>

                    res: {tag_name}

                </Col>
                <Col lg={4}>

                    res: {tag_name}

                </Col>
                <Col lg={4}>

                    res: {tag_name}

                </Col>
                </Row>
            </Card.Body>
        </Card>

    )
}
