import React, {useState, useEffect} from 'react';
import {Card, Row} from 'react-bootstrap';
import {useParams, useLocation} from "react-router-dom";
import axios from 'axios';

import ItemPrev from './ItemPrev';

export default function ItemList() {
    const [items, setItems] = useState([])
    const {subject} = useParams();
    const location = useLocation();

    useEffect(()=>{
        let params, address;
        if (location.pathname.startsWith('/search')) {
            params = {search: subject};
            address = '/api/items/search';
        } else {
            params = {tag_name: subject};
            address = '/api/items/withtag';
        }
        if (items.length === 0) {
            axios.get(address, {params})
            .then((res)=>{
                setItems(res.data.items)
            })
            .catch((err)=>{console.log(err)})
        }
    }, [])

    return (
        <Card className="my-1 pt-3 border-secondary bg-dark text-light">
            <Card.Title className="ml-3">{`All items with "${subject}":`}</Card.Title>
            <Card.Body>
                <Row>
                {items.length ? items.map((item, index) => { return (
                    <ItemPrev data={item} key={index}/>
                )}) : <span className="mx-auto my-4">{" There's nothing here ¯\\_(ツ)_/¯ "}</span> }
                </Row>
            </Card.Body>
        </Card>

    )
}
