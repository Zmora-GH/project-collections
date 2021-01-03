import React, {useContext} from 'react';
import {Carousel, Card, Button} from 'react-bootstrap';

import Item from '../items/Item';
import {AuthContext} from '../core/context';

export default function Collection() {
    const {isAuth, isAdmin} = useContext(AuthContext);
    // TODO: Праверка на владение
    return (
        <Card className="bg-light m-1 p-2">
            {isAuth || isAdmin ?
                <Card.Title>
                    <span> SOME TITLE SOME TITLE SOME TITLE SOME TITLE SOME TITLE </span>
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
