import React, {useState, useEffect} from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import {useParams} from "react-router-dom";
import axios from 'axios';

import ItemPrev from './ItemPrev';

export default function ItemList() {
    const [items, setItems] = useState([])
    const {tag_name} = useParams();

    useEffect(()=>{
        if (items.length === 0) {
            let params = {tag_name: tag_name}
            axios.get('/api/items/withtag', {params})
            .then((res)=>{
                setItems(res.data.items)
            })
            .catch((err)=>{console.log(err)})
        }
    }, [])

    return (
        <Card className="my-1 pt-3 border-secondary bg-dark text-light">
            <Card.Title className="ml-3">{`All items with "${tag_name}":`}</Card.Title>
            <Card.Body>
                <Row>
                {items.map((item, index) => { return (
                    <Col lg={4}>
                        <ItemPrev data={item} key={index}/>
                    </Col>
                )})}
                </Row>
            </Card.Body>
        </Card>

    )
}
