import React from 'react';
import {Card} from 'react-bootstrap';

export default function MainTopCollection() {
    return (
        <Card
            border="dark"
            bg="dark"
            text="white"
            role="button"
            onClick={()=>{window.location.replace("/collection/3")}}
        >
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
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )
}
