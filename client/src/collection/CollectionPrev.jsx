import React from 'react';
import {Card, Button, Col, Row, Image} from 'react-bootstrap';

export default function CollectionPrev(props) {
    //props or params for get id // link
    // id
    // image url
    // description
    // item count
    return (
        <Card
            border="light"
            bg="dark"
            text="white"
            role="button"
            onClick={()=>{window.location.replace("/collection/3")}}
        >
            <Card.Title >COLL NAME</Card.Title>

            <Card.Body>
                <Row>
                    <Col lg={4}>
                        <Image
                            rounded
                            fluid
                            variant="top"
                            src="https://images.freeimages.com/images/large-previews/10a/coins-1239681.jpg"/>

                    </Col>
                    <Col lg={8}>
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


                    </Col>
                </Row>

            </Card.Body>
            <Card.Footer>
                <small className="text-muted">  20-20-2020   </small>
                <strong className="text-muted float-right "> # USERNAME </strong>
            </Card.Footer>
        </Card>
    )
}
