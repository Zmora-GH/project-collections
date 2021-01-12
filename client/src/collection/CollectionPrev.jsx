import React from 'react';
import {Card, Button, Col, Row, Image} from 'react-bootstrap';

export default function CollectionPrev(props) {

    return (
        <Card
            border="light"
            bg="dark"
            text="white"
            role="button"
            onClick={()=>{window.location.replace(`/collection/${props.data._id}`)}}
        >
            <Card.Title >{props.data.name}</Card.Title>

            <Card.Body>
                <Row>
                    <Col lg={4}>
                        <Image
                            rounded
                            fluid
                            variant="top"
                            src={`/static/${props.data.image_url}`}/>
                    </Col>
                    <Col lg={8}>
                        <Card.Text>
                            {props.data.description}
                        </Card.Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>Theme: <strong>{props.data.theme}</strong></span>
                        <span className="float-right">Total items: <strong>{props.data.itemCount}</strong></span>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted"> {new Date(props.data.created).toLocaleDateString()} </small>
                <strong className="text-muted float-right "> # {props.data.users[0].username.toUpperCase()} </strong>
            </Card.Footer>
        </Card>
    )
}
