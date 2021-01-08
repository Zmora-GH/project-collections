import React, {useContext, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Carousel, Card, Button} from 'react-bootstrap';
import axios from 'axios';

import Item from '../items/Item';
import {AuthContext} from '../core/context';

export default function Collection() {
    const {collId} = useParams();
    const {isAuth, isAdmin} = useContext(AuthContext);
    const [items, setItems] = useState([])

    useEffect(()=>{
        if (items.length === 0) {
            // TODO:  GET ITEMS GET COLLNAME
        }
    },[])

    return (
        <Card className="bg-light m-1 p-2">
            {isAuth || isAdmin ?
                <Card.Title>
                    <span> NAME OF COLL: {collId} </span>
                    <Button size="sm" variant="outline-dark" className="float-right mx-1 px-2">Edit Coll</Button>
                    <Button size="sm" variant="outline-dark" className="float-right mx-1 px-2">Edit Item</Button>
                </Card.Title>
            :
                <Card.Title> SOME TITLE </Card.Title>
            }
            <Carousel
                fade={false}
                indicators={false}
                slide={true}
                >
                <Carousel.Item> <Item /></Carousel.Item>
                <Carousel.Item> <Item /></Carousel.Item>
                <Carousel.Item> <Item /></Carousel.Item>
                <Carousel.Item> <Item /></Carousel.Item>
                <Carousel.Item> <Item /></Carousel.Item>
            </Carousel>

        </Card>
    )
}
