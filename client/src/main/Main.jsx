import React from 'react';
import {CardColumns, Row, Col, Container} from 'react-bootstrap';

import ItemPrev from '../items/ItemPrev';
import CollectionPrev from '../collection/CollectionPrev';

export default function Main() {
    return (
        <Container  className="my-4">
            <Row>
                <Col lg={10}>
                    <Row className="mb-5">
                        <Col lg={12}><h4> Last added items:</h4></Col>
                        <Col lg={12}><ItemPrev /></Col>
                        <Col lg={12}><ItemPrev /></Col>
                        <Col lg={12}><ItemPrev /></Col>
                    </Row>
                    <Row className="mb-5 justify-content-center">
                        <Col lg={12}><h4> Top collections an week:</h4></Col>
                        <Col lg={5} className="my-2"><CollectionPrev /></Col>
                        <Col lg={5} className="my-2"><CollectionPrev /></Col>
                        <Col lg={5} className="my-2"><CollectionPrev /></Col>
                    </Row>
                </Col>
                <Col lg={2}>
                    <div className="my-2">
                        <h5> Tags:</h5>
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
