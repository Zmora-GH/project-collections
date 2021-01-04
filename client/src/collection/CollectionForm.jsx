import React, {useCallback, useState, useEffect} from 'react';
import Dropzone, {useDropzone} from 'react-dropzone'
import {Card, Form, Button, Col} from 'react-bootstrap';
import axios from 'axios';

export default function CollectionForm() {
    const [formData, setFormData] = useState({name: "", theme: "", discription: ""})
    const [themes, setThemes] = useState([])
    const [fields, setFields] = useState(new Array(15).fill(null))
    const {getRootProps, getInputProps} = useDropzone()

    const onDropHandle = (file) => {
        console.log(file)
    }

    const onDragOverHandle = (event) => {
        console.log(event);
    }

    const formChangeHandle = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const fieldsChangeHandle = (event) => {
        let tempFields = fields;
        tempFields[parseInt(event.target.id)] = event.target.value;
        setFields(tempFields)
    }

    const formSubmitHandle = (event) => {
        console.log('SUBMIT');
        // axios.post()
    }

    useEffect( () => {
        if (themes.length === 0) {
            console.log('GET THEMES');
            // axios.get()
        }
    }, [])
    return (
        <Card className="my-1 p-3 bg-dark text-light">
            <Form className="bg-dark text-light" onSubmit={formSubmitHandle}>
                <Form.Row>
                    <Col md={3}>
                        <Form.Group className="bg-dark text-light">
                            <Dropzone onDrop={onDropHandle} onDragOver={onDragOverHandle} maxFiles={1}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                        <div {...getRootProps()} className="rounded dropbox">
                                            <input {...getInputProps()} /> <p> Click here  or drop image</p>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                        </Form.Group>
                    </Col>
                    <Col md={9}>
                        <Form.Group>
                            <Form.Control
                                onChange={formChangeHandle}
                                type="text"
                                placeholder="Name"
                                name="name"
                                className="bg-dark text-light"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                onChange={formChangeHandle}
                                as="select"
                                custom
                                placeholder="Theme"
                                name="theme"
                                className="bg-dark text-light">
                                <option value="0" className="text-muted">Choose theme ... </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                onChange={formChangeHandle}
                                as="textarea"
                                placeholder="Discription"
                                rows={3}
                                style={{"resize":"none"}}
                                name="discription"
                                className="bg-dark text-light"/>
                        </Form.Group>
                    </Col>
                </Form.Row>


            <Card.Title className="my-2">Custom Fields:</Card.Title>
            <Form inline>
                {[
                    'Numeric Field',
                    'String Field',
                    'Text Field',
                    'Date Field',
                    'Boolean Field'
                ].map((field, index) => {
                    return (
                        <Col lg={4} className="my-1">
                            <Form.Row className="my-1 mx-2">
                                <Form.Control type="checkbox" className="mx-1"/>
                                <Form.Control
                                    onChange={fieldsChangeHandle}
                                    disabled={true}
                                    type="text"
                                    placeholder={field}
                                    name=""
                                    className="bg-dark text-light"
                                    id={(index*3).toString()}/>
                            </Form.Row>
                            <Form.Row className="my-1 mx-2">
                                <Form.Control type="checkbox" className="mx-1"/>
                                <Form.Control
                                    onChange={fieldsChangeHandle}
                                    disabled={true}
                                    type="text"
                                    placeholder={field}
                                    name=""
                                    className="bg-dark text-light"
                                    id={(index*3 + 1).toString()}/>
                            </Form.Row>
                            <Form.Row className="my-1 mx-2">
                                <Form.Control type="checkbox" className="mx-1"/>
                                <Form.Control
                                    onChange={fieldsChangeHandle}
                                    disabled={true}
                                    type="text"
                                    placeholder={field}
                                    name=""
                                    className="bg-dark text-light"
                                    id={(index*3 + 2).toString()}/>
                            </Form.Row>
                        </Col>
                    )
                })}
            </Form>
            <Button variant="light" type="submit" className="my-3 px-3 float-right w-25">
                Create
            </Button>
            </Form>

        </Card>
    )
}
