import React from 'react';
import {CardColumns, Row, Col, Container} from 'react-bootstrap';

import ItemPrev from '../items/ItemPrev';
import CollectionPrev from '../collection/CollectionPrev';

export default function Main() {

    return (
        <Container fluid className="my-2 bg-dark text-light">
            <Row>
                <Col lg={10}>
                    <Row className="mb-4 justify-content-center">
                        <Col lg={12}><h4> Last added items:</h4></Col>
                        <Col lg={4} className="my-1"><ItemPrev /></Col>
                        <Col lg={4} className="my-1"><ItemPrev /></Col>
                        <Col lg={4} className="my-1"><ItemPrev /></Col>
                    </Row>
                    <Row className="mb-4 justify-content-center">
                        <Col lg={12}><h4> Top collections an week:</h4></Col>
                        <Col lg={12} className="my-1"><CollectionPrev /></Col>
                        <Col lg={12} className="my-1"><CollectionPrev /></Col>
                        <Col lg={12} className="my-1"><CollectionPrev /></Col>
                    </Row>
                </Col>
                <Col lg={1}>
                    <div className="my-2">
                        <h5> Tags: </h5>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">a1</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">a3</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">aa 33 aa</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">ff ddd</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">asd sd asdas asda</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">asd  dd dd</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">a1</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">a3</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">aa 33 aa</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">ff ddd</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">asd sd asdas asda</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">asd  dd dd</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">a1</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">a3</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">aa 33 aa</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">ff ddd</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">asd sd asdas asda</a>
                        <a href="/items/asdsdasdasd" class="badge badge-secondary mx-1">asd  dd dd</a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
