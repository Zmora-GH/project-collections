import React from 'react';
import {Card, Badge, Row, Image, Col } from 'react-bootstrap';

import Likes from './Likes'

export default function ItemPrev(props) {
    return (
        <Col lg={4} className="my-1">
        <Card
            border={props.colormode.text}
            bg={props.colormode.back}
            text={props.colormode.text}
            role="button"
            >
            <Card.Title className="text-center">{props.data.name}</Card.Title>
            <Card.Body
                onClick={()=>{ window.location.replace(`/collection/${props.data.collection_id}`)}}
                >
                <Row className="my-1">
                    <Image
                        rounded
                        fluid
                        variant="top"
                        src={`/static/${props.data.image_url}`}/>
                </Row>
                <Row className="my-1">
                    {props.data.tags_id.map((tag, index)=>{
                        return (
                            <Badge
                                key={index}
                                as="a"
                                href={`/items/${tag.name}`}
                                className="mx-1 d-inline-block"
                                variant="secondary">
                                {tag.name}
                            </Badge>)
                    })}
                </Row>
            </Card.Body>
            <Card.Footer className="text-center">
                <Likes startCount={props.data.like_list.length} itemId={props.data._id}/>
            </Card.Footer>
        </Card>
        </Col>
    )
}
