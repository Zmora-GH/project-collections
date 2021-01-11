import React from 'react';
import {Card, Col, Row, Button, Badge, Table, Spinner, Tab, Tabs} from 'react-bootstrap';
import {HandThumbsUp, TrashFill, PenFill } from 'react-bootstrap-icons';

import CommentBox from '../comments/CommentBox';

export default function Item(props) {
    console.log(props.data);
    return (
        <Card border="light" bg="dark" text="light" className="my-2 mx-auto">
            <Card.Title className='p-1'>
                <span className="mx-2">{props.data.name}</span>
                <Button size="sm" variant="outline-danger" className="float-right mx-1 px-2">
                     <TrashFill color="red" />
                </Button>
                <Button size="sm" variant="outline-light" className="float-right mx-1 px-2">
                     <PenFill color="white" />
                </Button>
            </Card.Title>
            <Card.Body>
                <Tabs defaultActiveKey="item" className="mx-auto" >
                    <Tab eventKey="item" title="Item">
                        <Row className="mt-4">
                            <Col md={5}>
                                <Card.Img
                                    variant="top"
                                    src={props.data.image_url || '/static/noimage.jpg'}
                                    fluid
                                    rounded
                                    className="border border-secondary"
                                    />
                                {props.data.tags_id.map((tag, index) => {
                                    return (<Badge className="mx-1" variant="light" key={index}> {tag.name} </Badge>)
                                })}
                            </Col>
                            <Col md={7}>
                                <Card.Body>
                                    <Table size="sm" borderless striped variant="dark">
                                        <tbody>

                                            {props.data.fieldset_id.fields.slice(0, 6).map((f, i)=>{
                                                if (f) {return(
                                                    <tr><td className="font-weight-bold">{f.name}</td>
                                                    <td>{f.value}</td></tr>
                                            )}})}

                                            {props.data.fieldset_id.fields.slice(9, 12).map((f, i)=>{
                                                if (f) {return(
                                                    <tr><td className="font-weight-bold">{f.name}</td>
                                                    <td>{new Date(f.value).toLocaleDateString()}</td></tr>
                                            )}})}

                                            {props.data.fieldset_id.fields.slice(12, 15).map((f, i)=>{
                                                if (f) {return(
                                                    <tr><td className="font-weight-bold">{f.name}</td>
                                                    <td>{f.value ? 'Yes': 'No'}</td></tr>
                                            )}})}

                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Col>
                        </Row>

                            {props.data.fieldset_id.fields.slice(6, 9).map((f, i)=>{
                                if (f) {return(
                                    <Row>
                                    <Col md={12} className="text-center">{f.name}</Col>
                                    <Col md={12} className="">
                                        {f.value}
                                    </Col>
                                    </Row>
                                )}
                            })}

                        <Row className="mb-3">
                            <Col md={12} className="text-center">
                                <Button variant="outline-light" className="text-center px-1">
                                    <HandThumbsUp size={24}/> <Badge variant="light"> 935 </Badge>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} >
                            <small className="text-muted float-right"> {new Date(props.data.created).toLocaleDateString()}</small>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="comments" title="Comments">
                        <Card.Body>
                            <CommentBox itemId={props.data._id}/>
                        </Card.Body>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    )
}
