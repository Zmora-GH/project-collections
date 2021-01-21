import React, {useContext, useState} from 'react';
import {Card, Col, Row, Button, Badge, Table, Tab, Tabs} from 'react-bootstrap';
import {TrashFill, PenFill } from 'react-bootstrap-icons';
import ReactMarkdown from 'react-markdown'
import {AuthContext} from '../core/context';
import axios from 'axios';

import CommentBox from '../comments/CommentBox';
import Likes from './Likes';

export default function Item(props) {
    const [key, setKey] = useState('item');
    const {isAdmin, userId} = useContext(AuthContext);

    const deleteHandle = ()=>{
        axios.post('/api/items/delete', {item_id: props.data._id})
    }

    return (
        <Row>
            <Card
                border={props.colormode.text}
                bg={props.colormode.back}
                text={props.colormode.text}
                className="my-2 mx-auto w-100">
                <Card.Title className='p-1'>
                    <span className="mx-2">{props.data.name}</span>

                    {props.owner ?
                        <span>
                            <Button size="sm" variant="outline-danger"
                                className="float-right mx-1 px-2"
                                onClick={deleteHandle}>
                                <TrashFill color="red" />
                            </Button>
                            <Button size="sm" variant="outline-secondary" className="float-right mx-1 px-2">
                                <PenFill color="gray" />
                            </Button>
                        </span>
                        : '' }

                    </Card.Title>
                    <Card.Body>
                        <Tabs activeKey={key} className="mx-auto" onSelect={(k) => setKey(k)}>
                            <Tab eventKey="item" title="Item" tabClassName={props.colormode.asClasses}>
                                <Row className="mt-4">
                                    <Col md={5}>
                                        <Card.Img
                                            variant="top"
                                            src={`/static/${props.data.image_url}` || '/static/noimage.jpg'}
                                            fluid
                                            rounded
                                            className="border border-secondary"
                                            />
                                        {props.data.tags_id.map((tag, index) => {
                                            return (<Badge className="mx-1" variant="secondary" key={index}> {tag.name} </Badge>)
                                        })}
                                    </Col>
                                    <Col md={7}>
                                        <Card.Body>
                                            <Table size="sm" borderless striped variant={props.colormode.table}>
                                                <tbody>

                                                    {props.data.fieldset_id.fields.slice(0, 6).map((f, i)=>{
                                                        if (f) {return(
                                                            <tr key={i}><td className="font-weight-bold">{f.name}</td>
                                                            <td>{f.value}</td></tr>
                                                        )}})}

                                                        {props.data.fieldset_id.fields.slice(9, 12).map((f, i)=>{
                                                            if (f) {return(
                                                                <tr key={i}><td className="font-weight-bold">{f.name}</td>
                                                                <td>{new Date(f.value).toLocaleDateString()}</td></tr>
                                                            )}})}

                                                            {props.data.fieldset_id.fields.slice(12, 15).map((f, i)=>{
                                                                if (f) {return(
                                                                    <tr key={i}><td className="font-weight-bold">{f.name}</td>
                                                                    <td>{f.value ? 'Yes': 'No'}</td></tr>
                                                                )}})}

                                                            </tbody>
                                                        </Table>
                                                    </Card.Body>
                                                </Col>
                                            </Row>

                                            {props.data.fieldset_id.fields.slice(6, 9).map((f, i)=>{
                                                if (f) {return(
                                                    <Row key={i}>
                                                        <Col md={12} className="text-center">{f.name}</Col>
                                                        <Col md={12} className="">
                                                            <div className={"rounded p-1 my-1" + props.colormode.asClasses}>
                                                                <ReactMarkdown children={f.value}/>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                )}
                                            })}

                                            <Row className="mb-3">
                                                <Col md={12} className="text-center">
                                                    <Likes startCount={props.data.like_list.length} itemId={props.data._id}/>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md={12} >
                                                    <small className="text-muted float-right"> {new Date(props.data.created).toLocaleDateString()}</small>
                                                </Col>
                                            </Row>

                                        </Tab>
                                        <Tab eventKey="comments" title="Comments"  tabClassName={props.colormode.asClasses}>
                                            <Card.Body>
                                                <CommentBox itemId={props.data._id} isOpen={(key === 'comments')} colormode={props.colormode}/>
                                            </Card.Body>
                                        </Tab>
                                    </Tabs>
                                </Card.Body>
                            </Card>
                        </Row>
                    )
                }
