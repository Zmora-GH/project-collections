import React, {useContext, useState, useEffect} from 'react';
import Dropzone, {useDropzone} from 'react-dropzone'
import {Card, Form, Button, Col} from 'react-bootstrap';
import axios from 'axios';

import Field from './Field'
import {AuthContext} from '../core/context';
import DropImageBox from '../drops/DropImageBox';

export default function CollectionForm() {
    const {userId} = useContext(AuthContext);
    const [formData, setFormData] = useState({name: "", theme: "", discription: "", files:[]})
    const [themes, setThemes] = useState([])
    const [fields, setFields] = useState(new Array(15).fill(''))
    const {getRootProps, getInputProps, acceptedFiles, fileRejections} = useDropzone()

    const onDropHandle = (afiles, rfiles, event) => {
        if (afiles) {
            setFormData({...formData, files: afiles})
        }
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
        event.preventDefault();
        console.log(formData.files);
        axios.post('/api/collection/create', {form: formData, fields, userId}, {headers: {"Contetnt-Type":"multipart/form-data"}})
        .then((res) => { })
        .catch((err) => { console.log("ERR: ", err) })
    }

    useEffect( () => {
        if (themes.length === 0) {
            axios.get('/api/themes')
            .then((res) => {setThemes(res.data)})
            .catch((err) => { console.log(err); })
        }
    }, [])

    return (
        <Card className="my-1 p-3 bg-dark text-light">
            <Form className="bg-dark text-light" onSubmit={formSubmitHandle}>
                <Form.Row>
                    <Col lg={3}>
                        <Form.Group className="bg-dark text-light">
                            <DropImageBox onDrop={onDropHandle} successFlag={formData.files.length} />
                            <Form.Text className="text-muted text-truncate">
                                {formData.files.length ? formData.files[0].name : 'Please choice correct file ...'}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={8}>
                        <Form.Group>
                            <Form.Control
                                required={true}
                                onChange={formChangeHandle}
                                type="text"
                                placeholder="Name"
                                name="name"
                                className="bg-dark text-light"/>
                        </Form.Group>
                        <Form.Group className="form-inline">
                            <Form.Control
                                required={true}
                                onChange={formChangeHandle}
                                as="select"
                                custom
                                name="theme"
                                className="bg-dark text-light w-25">
                                    <option value="" className="text-muted">Theme ...</option>
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
            <Card.Text className="my-1 text-muted">
                Please enter the names of custom fields or leave the field blank
            </Card.Text>
            <Form inline>
                {[
                    'Numeric Field','Numeric Field','Numeric Field',
                    'String Field','String Field','String Field',
                    'Text Field','Text Field','Text Field',
                    'Date Field','Date Field','Date Field',
                    'Boolean Field','Boolean Field','Boolean Field'
                ].map((field, index) => {
                    return (<Field key={index} field={field} index={index} func={fieldsChangeHandle}/>)
                })}
            </Form>
            <Button variant="light" type="submit" className="my-3 px-3 float-right w-25">
                Create
            </Button>
            </Form>
        </Card>
    )
}

// TODO: Подгрузка тем и подстановка в опции
