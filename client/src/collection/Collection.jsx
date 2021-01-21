import React, {useContext, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Card, Button, Col, Row, Badge} from 'react-bootstrap';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'

import Item from '../items/Item';
import {AuthContext, ColorContext} from '../core/context';

export default function Collection() {
    const {collId} = useParams();
    const [loading, setLoading] = useState(true)
    const {isAuth, isAdmin, userId} = useContext(AuthContext);
    const {colormode} = useContext(ColorContext);
    const [collection, setCollection] = useState()

    useEffect(()=>{
        if (!collection) {
            let params = {collection_id: collId}
            axios.get('/api/collection', {params})
            .then((res)=>{
                setCollection(res.data);
                setLoading(false)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    },[])

    if (loading){return ''} else {
    return (
        <Card className={"m-1 p-2" + colormode.asClasses}>
            {isAdmin || userId===collection.user_id ?
                <Card.Title>
                    <span> {collection.name} </span>
                    <Button
                        size="sm"
                        variant="outline-secondary"
                        className="float-right mx-1 px-2"
                        onClick={()=>{}}>
                        Edit Collection
                    </Button>
                    <Button
                        size="sm"
                        variant="outline-secondary"
                        className="float-right mx-1 px-2"
                        as="a"
                        href={`/collection/create_item/${collection._id}`}>
                        Add Item
                    </Button>
                </Card.Title>
            :
                <Card.Title> {collection.name} </Card.Title>
            }
            <Card.Body>
                <Row>
                    <Col lg={3}>
                        <Card.Img src={`/static/${collection.image_url}`}/>
                        <strong ># {collection.user_id.username.toUpperCase()} </strong>
                        {collection.user_id.status ? <Badge variant="danger">Banned</Badge>: ''}
                        <Badge variant="warning">admin</Badge>
                        <br/>
                        <small className="text-muted"> {new Date(collection.created).toLocaleDateString()} </small>
                        <br/>
                        <small><ReactMarkdown children={collection.description}/></small>
                        <div className="border-bottom"></div>
                    </Col>
                    <Col lg={9}>
                        { collection.items.map((data, index) => {
                            return <Item key={index} data={data} owner={isAdmin || userId===collection.user_id} colormode={colormode}/>
                        })}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )}
}
