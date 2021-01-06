import React from 'react';
import {Form, Col, Row,Container} from 'react-bootstrap';

export default function CustomFields(props) {
    const numClearing = (e) => {
        e.target.value = e.target.value.replace(/[^\d]/g, '');
    }

    return (
        <Container className="my-2">

            {props.scheme.slice(0,3).map((field,index)=>{ if (field != '') { return (
                <Form.Group as={Row} className="justify-content-center">
                    <Form.Label column lg={3} > {field} </Form.Label>
                    <Col lg={6}>
                        <Form.Control
                            required={true}
                            onChange={props.onChangeFunc}
                            name={index}
                            className="bg-dark text-light"
                            type="number"
                            onKeyUp={numClearing}/>
                    </Col>
                </Form.Group>
            )}})}

            {props.scheme.slice(3,6).map((field,index)=>{ if (field != '') { return (
                <Form.Group as={Row} className="justify-content-center">
                    <Form.Label column lg={3} > {field} </Form.Label>
                    <Col lg={6}>
                        <Form.Control
                            required={true}
                            onChange={props.onChangeFunc}
                            id={index + 3}
                            className="bg-dark text-light" />
                    </Col>
                </Form.Group>
            )}})}

            {props.scheme.slice(6,9).map((field,index)=>{ if (field != '') { return (
                <Form.Group as={Row} className="justify-content-center">
                    <Form.Label column lg={3} > {field} </Form.Label>
                    <Col lg={6}>
                        <Form.Control
                            rows={5}
                            required={true}
                            onChange={props.onChangeFunc}
                            id={index + 6}
                            className="bg-dark text-light unres"
                            as="textarea" />
                    </Col>
                </Form.Group>
            )}})}

            {props.scheme.slice(9,12).map((field,index)=>{ if (field != '') { return (
                <Form.Group as={Row} className="justify-content-center">
                    <Form.Label column lg={3} > {field} </Form.Label>
                    <Col lg={6}>
                        <Form.Control
                            placeholder="asdasd"
                            required={true}
                            onChange={props.onChangeFunc}
                            id={index + 9}
                            className="bg-dark text-light"
                            type="date"/>
                    </Col>
                </Form.Group>
            )}})}

            {props.scheme.slice(12,15).map((field,index)=>{ if (field != '') { return (
                <Form.Group as={Row} className="justify-content-center">
                    <Form.Check
                        id={index + 12}
                        onChange={props.onChangeFunc}
                        label={field}/>
                </Form.Group>
            )}})}

        </Container>
    )
}
