import React, {useContext, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import FormData from 'form-data'
import {Card, Form, Button, Col} from 'react-bootstrap';
import axios from 'axios';

import Field from './Field'
import {AuthContext} from '../core/context';
import DropImageBox from '../drops/DropImageBox';

export default function CollectionForm() {
    const {profile_name} = useParams(); // Перед этим возникает 404 // замменитть на пропс + переход после submit
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({name: "", theme: "", discription: ""})
    const [themes, setThemes] = useState([])
    const [fields, setFields] = useState(new Array(15).fill(''))
    const [fileCont, setFileCont] = useState()
    const [prevUrl, setPrevUrl] = useState()


    const onDropHandle = (afiles, rfiles, event) => {
        if (afiles.length !== 0) {
            let reader = new FileReader();
            reader.onloadend = () => {
                let url = reader.result
                setPrevUrl(url);
            }
            reader.readAsDataURL(afiles[0])
            setFileCont(afiles)
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
        axios.post('/api/collection/create', {...formData, fields, profile_name})
        .then((res) => {
            const coll_id = res.data.coll_id;
            const data = new FormData();
            data.append("coll_id", coll_id);
            data.append('image', fileCont[0]);
            const config = {headers: {'Content-Type': 'multipart/form-data'}};
            axios.post('/api/collection/image', data, config)
            .catch((err) => { console.log(err) });
        })
        .catch((err) => { console.log(err) })
    }

    useEffect( () => {
        if (themes.length === 0) {
            axios.get('/api/themes')    
            .then((res) => { setThemes(res.data) })
            .catch((err) => { console.log(err); })
        }
    }, [themes])

    return (
        <Card className="my-1 p-3 bg-dark text-light">
            <Form className="bg-dark text-light" onSubmit={formSubmitHandle}>
                <Form.Row>
                    <Col lg={3}>
                        <Form.Group className="bg-dark text-light">
                            <DropImageBox onDrop={onDropHandle} successFlag={prevUrl} prev={prevUrl}/>
                            <Form.Text className="text-muted text-truncate mx-2">
                                {prevUrl ? '' : 'Please choice correct file ...'}
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
                                    {themes.map( (theme) => {
                                        return <option value={theme}>{theme}</option>
                                    } )}
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
