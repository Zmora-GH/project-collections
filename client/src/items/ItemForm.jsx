import React, {useContext, useState, useEffect} from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap';
import Tags from "@yaireo/tagify/dist/react.tagify"
import axios from 'axios';

import {AuthContext} from '../core/context';
import DropImageBox from '../drops/DropImageBox';
import CustomFields from './CustomFields';

export default function ItemForm() {
    const {userId} = useContext(AuthContext);
    const [inputTags, setInputTags] = useState([])
    const [whiteList, setWhiteList] = useState()
    const [formData, setFormData] = useState({name: "", files:[]})

    const onDropHandle = (afiles, rfiles, event) => {
        if (afiles) { setFormData({...formData, files: afiles}) }
    }

    const tagsChangeHandle = (event) => {
        event.persist();
        let tags = []
        let data = event.target.value ? JSON.parse(event.target.value): []
        for (let i in data) {
            tags.push(data[i].value);
        }
        setInputTags(tags);
    }

    const formSubmitHandle = (event) => {
    }
    const formChangeHandle = (event) => {
    }

    useEffect( () => {
        console.log('EFFECT');
    }, [])

    return (
        <div>
            <Card className="my-1 p-3 bg-dark text-light">
                <Form className="bg-dark text-light" onSubmit={formSubmitHandle}>
                    <Card.Title className="text-center mb-4"> Create new item for "COLL_NAME" </Card.Title>
                    <Form.Row>
                        <Col lg={4}>
                            <Form.Group>
                                <DropImageBox
                                    onDrop={onDropHandle}
                                    successFlag={formData.files.length} />
                            </Form.Group>
                        </Col>
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
                            <Form.Group>
                                <Tags
                                    value=''
                                    whitelist={whiteList}
                                    onChange={tagsChangeHandle}
                                    placeholder="Tags"
                                    className="form-control bg-dark text-light c-tag border-light"/>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <CustomFields />
                    </Form.Row>
                    <Button variant="light" type="submit">
                        Create
                    </Button>
                </Form>
            </Card>
        </div>
    )
}
