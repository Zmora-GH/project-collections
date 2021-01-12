import React from 'react';
import {Card, Badge, Row, Image } from 'react-bootstrap';

import Likes from './Likes'

export default function ItemPrev(props) {
    return (
        <Card
            border="light"
            bg="dark"
            text="light"
            role="button"
            onClick={()=>{ window.location.replace(`/collection/${props.data.collection_id}`)}}>

            <Card.Title className="text-center">{props.data.name}</Card.Title>
            <Card.Body>
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
                                as="a"
                                href={`/items/${tag.name}`}
                                className="mx-1 d-inline-block"
                                variant="light">
                                {tag.name}
                            </Badge>)
                    })}
                </Row>
            </Card.Body>
            <Card.Footer className="text-center">
                <Likes startCount={props.data.like_list.length} itemId={props.data._id}/>
            </Card.Footer>
        </Card>
    )
}
