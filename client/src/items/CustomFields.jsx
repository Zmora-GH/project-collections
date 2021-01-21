import React from 'react';
import {Form, Col, Row,Container} from 'react-bootstrap';

export default function CustomFields(props) {
    return (
        <Container className="my-2">

            {props.scheme.slice(0,3).map((field,index)=>{ if (field !== '') { return (
                <Form.Group as={Row} className="justify-content-center">
                    <Col lg={6}>
                        <Form.Label > {field} </Form.Label>
                        <Form.Control
                            required={true}
                            onChange={props.onChangeFunc}
                            id={index ? index : "0"}
                            className={props.colormode.asClasses}
                            type="number"
                            />
                    </Col>
                </Form.Group>
            )}})}

            {props.scheme.slice(3,6).map((field,index)=>{ if (field !== '') { return (
                <Form.Group as={Row} className="justify-content-center">
                    <Col lg={6}>
                        <Form.Label > {field} </Form.Label>
                        <Form.Control
                            required={true}
                            onChange={props.onChangeFunc}
                            id={index + 3}
                            className={props.colormode.asClasses} />
                    </Col>
                </Form.Group>
            )}})}

            {props.scheme.slice(6,9).map((field,index)=>{ if (field !== '') { return (
                <Form.Group as={Row} className="justify-content-center">
                    <Col lg={6}>
                        <Form.Label > {field} </Form.Label>
                        <Form.Control
                            rows={5}
                            required={true}
                            onChange={props.onChangeFunc}
                            id={index + 6}
                            className={props.colormode.asClasses + "unres"}
                            as="textarea" />
                    </Col>
                </Form.Group>
            )}})}

            {props.scheme.slice(9,12).map((field,index)=>{ if (field !== '') { return (
                <Form.Group as={Row} className="justify-content-center">
                    <Col lg={6}>
                        <Form.Label > {field} </Form.Label>
                        <Form.Control
                            placeholder="asdasd"
                            required={true}
                            onChange={props.onChangeFunc}
                            id={index + 9}
                            className={"text-center" + props.colormode.asClasses}
                            type="date"/>
                    </Col>
                </Form.Group>
            )}})}

            {props.scheme.slice(12,15).map((field,index)=>{ if (field !== '') { return (
                <Form.Group as={Row} className="justify-content-center">
                    <Form.Check
                        bsPrefix="text-center"
                        id={index + 12}
                        onChange={props.onChangeFunc}
                        label={field}/>
                </Form.Group>
            )}})}

        </Container>
    )
}
