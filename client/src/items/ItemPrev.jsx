import React from 'react';
import {Card, Button, Badge, Col, Row, Image } from 'react-bootstrap';
import {HandThumbsUp} from 'react-bootstrap-icons';

export default function ItemPrev() {
    // TODO: Редирект на страницу коллекции и якорь на конкретный итем
    return (
        <Card
            border="light"
            bg="dark"
            text="light"
            role="button"
            onClick={ () => { window.location.replace("/collection/3#1") } }>

            <Card.Title>ITEM NAME</Card.Title>
            <Card.Body>
                <Row>
                    <Image
                        rounded
                        fluid
                        variant="top"
                        src="https://images.freeimages.com/images/large-previews/10a/coins-1239681.jpg"/>
                </Row>
                <Row>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                    <Badge className="mx-1" variant="light"> tag1 </Badge>
                    <Badge className="mx-1" variant="light"> tag1 </Badge>
                    <Badge className="mx-1" variant="light"> tag1 </Badge>
                    <Badge className="mx-1" variant="light"> tag1 </Badge>
                    <Badge className="mx-1" variant="light"> tag1 </Badge>
                    <Badge className="mx-1" variant="light"> tag1 </Badge>
                </Row>

</Card.Body>

            <Card.Footer className="text-center">
                <Button size='sm' variant="outline-light">
                    <HandThumbsUp size={20}/> <Badge variant="light"> 963 </Badge>
                </Button>
            </Card.Footer>
        </Card>
    )
}
