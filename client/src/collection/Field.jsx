import React from 'react';
import {Form, Col} from 'react-bootstrap';

export default function Field(props) {
    return (
        <Col lg={4} className="my-1">
            <Form.Row className="my-1 mx-2">
                <Form.Control
                    onChange={props.func}
                    type="text"
                    placeholder={props.field}
                    name=""
                    className={props.colormode.asClasses}
                    id={(props.index).toString()}/>
            </Form.Row>
        </Col>
    )
}
