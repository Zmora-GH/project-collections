import React from 'react';
import {Card} from 'react-bootstrap';

export default function MainLastItem() {
    // TODO: Редирект на страницу коллекции и якорь на конкретный итем
    return (
        <Card border="light" bg="dark" text="light">
            <Card.Img
                variant="top"
                src="https://images.freeimages.com/images/large-previews/10a/coins-1239681.jpg"
                fluid
                rounded
                />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )
}
