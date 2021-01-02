import React from 'react';
import {Card, Carousel, ListGroup, Col, Row, Button,Badge, Table, Spinner} from 'react-bootstrap';
import {HandThumbsUp} from 'react-bootstrap-icons';

import Comment from '../comments/Comment'
import CommentForm from '../comments/CommentForm'

export default function Item() {
    // TODO: Сначала загр контент потом коменты
    return (
            <Card border="light" bg="dark" text="light">
                <Card.Body>
                <Row>
                <Col md={6}>
                    <Card.Img
                        variant="top"
                        src="https://images.freeimages.com/images/large-previews/10a/coins-1239681.jpg"
                        fluid
                        rounded
                        className="border border-secondary"
                        />
                </Col>
                <Col md={6}>
                        <Card.Title>
                            <span>SOME ITEM TITLE</span>
                        </Card.Title>
                        <Card.Body>
                            <Table size="sm" borderless striped variant="dark">
                                <tbody>
                                <tr>
                                    <td className="font-weight-bold">01 some field:</td>
                                    <td> -01 some value </td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">02 some field:</td>
                                    <td> -01 some value </td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">03 some field:</td>
                                    <td> -01 some value </td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">04 some field:</td>
                                    <td> -01 some value </td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">05 some field:</td>
                                    <td> -01 some value </td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">06 some field:</td>
                                    <td> -01 some value </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">Text Description Long Text Description Long Text Description Long Text Description Long
                                        Text Description Long Text Description Long Text Description Long Text Description Long Text Description Long
                                        Text Description LongText Description Long Text Description Long
                                    </td>
                                </tr>
                            </tbody>
                            </Table>
                        </Card.Body>
                </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center my-5">
                        <Button variant="outline-light" className="text-center px-2">
                            <HandThumbsUp size={24}/> <Badge variant="light"> 9 </Badge>
                        </Button>
                    </Col>
                </Row>
                </Card.Body>
                <Card.Footer>
                    <Card.Title>Comments:</Card.Title>
                    <ListGroup as="ul" className="">
                        <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>

                        <Comment />
                        <Comment />
                        <Comment />
                        <CommentForm />
                    </ListGroup>
                </Card.Footer>
            </Card>
    )
}
