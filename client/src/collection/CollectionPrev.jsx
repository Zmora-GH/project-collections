import React from 'react';
import {Card, Button} from 'react-bootstrap';

export default function CollectionPrev(props) {
    //props or params for get id // link
    // id
    // image url
    // description
    // item count
    return (
        <Card
            border="dark"
            bg="dark"
            text="white"
            role="button"
            onClick={()=>{window.location.replace("/collection/3")}}
        >
            <Card.Title >Card title</Card.Title>
            <Card.Img
                variant="top"
                src="https://images.freeimages.com/images/large-previews/10a/coins-1239681.jpg"
                fluid
                rounded
                />
            <Card.Body>
                <Card.Text>
                    DESCRIPTION
                    tags_idasd
                    tags_idasd
                    asdasdasdasda
                    asdasdasdasdaloren
                    1231231 asdas dasdasda sdasdasdasd  asdas
                    as asd asdasdasdasdas  asdasdasdas as asdasdas asdasdasdas
                    a as
                     asdasdasdasdasd
                      asdasdasdasdasd

                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">  20-20-2020   </small>
                <small className="text-muted float-right">  username   </small>
            </Card.Footer>
        </Card>
    )
}
