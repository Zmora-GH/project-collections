import React from 'react';
import {CardColumns, Row, Col, Container} from 'react-bootstrap';

import ItemPrev from '../items/ItemPrev';
import CollectionPrev from '../collection/CollectionPrev';

export default function Main() {
    return (
        <Container  className="my-4">
            <Row>
                <Col>
                    <h5> Last added items:</h5>
                <CardColumns className="mb-5 p-2 shadow-lg">
                    <ItemPrev />
                    <ItemPrev />
                    <ItemPrev />
                </CardColumns>
                    <h5> Top collections an week:</h5>
                <CardColumns className="mb-5 p-2 shadow-lg">
                    <CollectionPrev />
                    <CollectionPrev />
                    <CollectionPrev />
                </CardColumns>

                </Col>
                <Col md={2}>
                    <div className="my-2 p-1 border">
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
