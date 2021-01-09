import React, {useContext, useState, useEffect} from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap';
import {useParams} from "react-router-dom";
import Tags from "@yaireo/tagify/dist/react.tagify"
import axios from 'axios';

import {AuthContext} from '../core/context';
import DropImageBox from '../drops/DropImageBox';
import CustomFields from './CustomFields';

export default function ItemForm() {
    const {collection_id} = useParams();
    const {userId} = useContext(AuthContext);
    const [scheme, setScheme] = useState([])
    const [inputTags, setInputTags] = useState([])
    const [whiteList, setWhiteList] = useState()
    const [formData, setFormData] = useState({name: ""})
    const [fieldsData, setFieldsData] = useState(new Array(15).fill(false))
    const [prevUrl, setPrevUrl] = useState()
    const [fileCont, setFileCont] = useState()

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

    const tagsChangeHandle = (event) => {
        event.persist();
        let tags = []
        let data = event.target.value ? JSON.parse(event.target.value): []
        for (let i in data) {
            tags.push(data[i].value);
        }
        setInputTags(tags);
    }

    const formChangeHandle = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const fieldsChangeHandle = (event) => {
        let tempData = fieldsData;
        if (event.target.type === "checkbox") {
            tempData[parseInt(event.target.id)] = event.target.checked;
        } else if (event.target.type === "number") {
            tempData[parseInt(event.target.id)] = parseInt(event.target.value);
        } else if (event.target.type === "date") {
            tempData[parseInt(event.target.id)] = new Date(event.target.value);
        } else {
            tempData[parseInt(event.target.id)] = event.target.value;
        }
        setFieldsData(tempData)
    }

    const formSubmitHandle = (event) => {
        event.preventDefault();
        axios.post('/api/collection/add', {
            name: formData.name,
            fields: fieldsData,
            coll_id: collection_id,
            tags: inputTags,
            scheme: scheme
        })
        .then((res) => {
            const item_id = res.data.item_id;
            const data = new FormData();
            data.append("item_id", item_id);
            data.append('image', fileCont[0]);
            const config = {headers: {'Content-Type': 'multipart/form-data'}};
            axios.post('/api/collection/image', data, config)
            .catch((err) => { console.log(err) });
        })
        .catch((err) => { console.log(err) })
    }

    useEffect( () => {
        if (scheme.length === 0) {
            axios.post('/api/collection/scheme', {coll_id: collection_id})
            .then((res)=>{
                setScheme(res.data)
            })
            .catch((err)=>{ })
        }
        if (!whiteList){
            axios.get('/api/tag')
            .then((res)=>{ let temp = []; res.data.forEach( (tag) => { temp.push(tag.name) }); setWhiteList(temp)})
            .catch((err)=>{ console.log(err) })
        }
    }, [])

    return (
        <div>
            <Card className="my-1 p-2 bg-dark text-light">
                <Form className="bg-dark text-light" onSubmit={formSubmitHandle}>
                    <Card.Title className="text-center mb-3"> {`Create new item for COLL: ${collection_id}`}</Card.Title>
                    <Form.Row className="justify-content-center">
                        <Col lg={4}>
                            <Form.Group>
                                <DropImageBox onDrop={onDropHandle} successFlag={prevUrl} prev={prevUrl}/>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row className="justify-content-center">
                        <Col lg={6} className="align-middle">
                            <Form.Group >
                                <Form.Label > Item Name: </Form.Label>
                                <Form.Control
                                    required={true}
                                    onChange={formChangeHandle}
                                    type="text"
                                    name="name"
                                    className="bg-dark text-light"/>
                            </Form.Group>
                            <Form.Group>
                                <Tags
                                    value=''
                                    whitelist={whiteList}
                                    onChange={tagsChangeHandle}
                                    placeholder="Tags"
                                    className="form-control form-control-sm bg-dark text-light c-tag border-light"/>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row className="justify-content-center">
                        <CustomFields scheme={scheme} onChangeFunc={fieldsChangeHandle}/>
                    </Form.Row>
                    <Button variant="light" type="submit" className="float-right w-25"> Create </Button>
                </Form>
            </Card>
        </div>
    )
}
