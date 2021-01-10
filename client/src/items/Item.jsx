import React from 'react';
import {Card, Col, Row, Button, Badge, Table, Spinner, Tab, Tabs} from 'react-bootstrap';
import {HandThumbsUp} from 'react-bootstrap-icons';

import CommentBox from '../comments/CommentBox';

export default function Item() {
    // TODO: Сначала загр контент потом коменты
    return (
        <Card border="light" bg="dark" text="light" className="my-2 mx-auto">
            <Card.Title className='p-1'>
                <span>SOME ITEM TITLE</span>
                <Button size="sm" variant="outline-light" className="float-right mx-1 px-2">Edit</Button>
            </Card.Title>
            <Card.Body>
                <Tabs defaultActiveKey="item" className="mx-auto" >
                    <Tab eventKey="item" title="Item">
                        <Row className="mt-4">
                            <Col md={5}>
                                <Card.Img
                                    variant="top"
                                    src="https://images.freeimages.com/images/large-previews/10a/coins-1239681.jpg"
                                    fluid
                                    rounded
                                    className="border border-secondary"
                                    />
                                <Badge className="mx-1" variant="light"> tag1 </Badge>
                                <Badge className="mx-1" variant="light"> tag1 </Badge>
                                <Badge className="mx-1" variant="light"> tag1 </Badge>
                            </Col>
                            <Col md={7}>
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
                        <Row className="mb-3">
                            <Col md={12} className="text-center">
                                <Button variant="outline-light" className="text-center px-1">
                                    <HandThumbsUp size={24}/> <Badge variant="light"> 935 </Badge>
                                </Button>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="comments" title="Comments">
                            <Card.Body>
                            <CommentBox />
                            </Card.Body>

                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    )
}
