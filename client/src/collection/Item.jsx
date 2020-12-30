import React from 'react';
import {Card, Carousel, ListGroup, Col, Row, Button,Badge} from 'react-bootstrap';
import {HandThumbsUp} from 'react-bootstrap-icons';

import Comment from '../common/Comment'
import CommentForm from '../common/CommentForm'

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
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content.
                        </Card.Text>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content.
                        </Card.Text>
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
                        <Comment />
                        <Comment />
                        <Comment />
                        <CommentForm />
                    </ListGroup>
                </Card.Footer>
            </Card>
    )
}
