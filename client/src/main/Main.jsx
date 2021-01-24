import React, {useState, useEffect, useContext} from 'react';
import {Row, Col, Container, Badge, Jumbotron} from 'react-bootstrap';
import axios from 'axios';
import {ColorContext} from '../core/context';
import { withTranslation } from 'react-i18next';

import ItemPrev from '../items/ItemPrev';
import CollectionPrev from '../collection/CollectionPrev';

export default withTranslation()(function Main({t}) {
    const {colormode} = useContext(ColorContext);
    const [loading, setLoading] = useState(true);
    const [lastItems, setlastItems] = useState();
    const [largeColls, setLargeColls] = useState();
    const [tagCloud, setTagCloud] = useState();

    useEffect(()=>{
        if (!lastItems) {
            axios.get('/api/items/last')
            .then((res)=>{
                setlastItems(res.data.last)})
            .catch((err)=>{console.log(err)})
        }
        if (!largeColls) {
            axios.get('/api/collection/largest')
            .then((res)=>{
                setLargeColls(res.data.largest)})
            .catch((err)=>{console.log(err)})
        }
        if (!tagCloud) {
            axios.get('/api/tag')
            .then((res)=>{
                setTagCloud(res.data.tags)})
            .catch((err)=>{console.log(err)})
        }
        setLoading(false)
    }, [])

    if (loading){return ''} else {
    return (
        <Container fluid className={"my-2" + colormode.asClasses}>
            <Row>
                <Col lg={10}>
                    <Row>
                        <Jumbotron className={"w-100 text-center" + colormode.asClasses}>
                            <Container>
                                <h1>
                                    <span> Welcom to </span>
                                    <strong className="decor-brand-text">Collections</strong>
                                </h1>
                                <p>
                                    Here is a small message for visitors about this site.
                                </p>
                            </Container>
                        </Jumbotron>
                    </Row>
                    <Row className="mb-4 justify-content-center">
                        <Col lg={12}><h4> Last added items:</h4></Col>
                        {lastItems ? lastItems.map((item, index)=>{
                            return (<ItemPrev data={item} key={index} colormode={colormode} t={t}/>)
                        }):""}
                    </Row>
                    <Row className="mb-4 justify-content-center">
                        <Col lg={12}><h4> Largest collections:</h4></Col>
                            {largeColls ? largeColls.map((coll, index)=>{
                                return (<CollectionPrev data={coll} key={index} colormode={colormode} t={t}/>)
                            }):""}
                    </Row>
                </Col>
                <Col lg={2}>
                    <div className="my-2">
                        <h5> Tags: </h5>
                        {tagCloud ? tagCloud.map((tag, index)=>{
                            return (
                                <Badge
                                    key={index}
                                    as="a"
                                    href={`/items/${tag.name}`}
                                    className="mx-1 d-inline-block"
                                    variant="secondary">
                                    {tag.name}
                                </Badge>)
                        }):""}
                    </div>
                </Col>
            </Row>
        </Container>
    )}
})
