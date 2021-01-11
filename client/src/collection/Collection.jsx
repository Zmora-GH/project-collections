import React, {useContext, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Card, Button, Col, Row} from 'react-bootstrap';
import axios from 'axios';

import Item from '../items/Item';
import {AuthContext} from '../core/context';

export default function Collection() {
    const {collId} = useParams();
    const {isAuth, isAdmin} = useContext(AuthContext);
    const [items, setItems] = useState([])

    useEffect(()=>{
        if (items.length === 0) {
            let params = {collection_id: collId}
            axios.get('/api/items', {params})
            .then((res)=>{
                setItems(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    },[])

    return (
        <Card className="bg-dark text-light m-1 p-2">
            {isAuth || isAdmin ?
                <Card.Title>
                    <span> NAME OF COLL: {collId} </span>
                    <Button size="sm" variant="outline-light" className="float-right mx-1 px-2">Edit Collection</Button>
                    <Button size="sm" variant="outline-light" className="float-right mx-1 px-2">Add Item</Button>
                </Card.Title>
            :
                <Card.Title>  NAME OF COLL: {collId} </Card.Title>
            }
            <Card.Body>
                <Row>
                    <Col lg={3}>
                        <Card.Img src="https://images.freeimages.com/images/large-previews/10a/coins-1239681.jpg"/>
                        <strong className=""># USERNAME</strong>
                        <br/>
                        <small className="text-muted">20 20 20</small>
                        <br/>
                        <p className="">DESCRIPTION</p>
                        <div className="border-bottom"></div>
                    </Col>
                    <Col lg={9} className="">
                        { items.map((data, index) => {
                            return <Row><Item key={index} data={data}/></Row>
                        })}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
