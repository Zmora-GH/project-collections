import React from 'react';
import {ListGroup, Row, Col} from 'react-bootstrap';

export default function Comment() {
    return (
         <ListGroup.Item as="li" className="my-1 bg-dark text-light border border-secondary comment-item  mx-auto">
             <Row>
                 <Col className="text-left font-weight-bold"> UsserName </Col>
                 <Col className="text-right text-muted"> Date:10 10 10 ... </Col>
             </Row>
             <Row>
                 <Col><span>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</span></Col>
             </Row>
         </ListGroup.Item>
    )
}
