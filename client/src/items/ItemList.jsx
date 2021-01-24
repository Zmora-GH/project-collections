import React, {useState, useEffect, useContext} from 'react';
import {Card, Row} from 'react-bootstrap';
import {useParams, useLocation} from "react-router-dom";
import axios from 'axios';
import {ColorContext} from '../core/context';
import ItemPrev from './ItemPrev';
import { withTranslation } from 'react-i18next';

export default withTranslation()(function ItemList({t}) {
    const {colormode} = useContext(ColorContext)
    const [items, setItems] = useState([])
    const {subject} = useParams();
    const location = useLocation();

    useEffect(()=>{
        let params, address;
        if (location.pathname.startsWith('/search')) {
            params = {search: subject};
            address = '/api/items/search';
        } else {
            params = {tag_name: subject};
            address = '/api/items/withtag';
        }
        if (items.length === 0) {
            axios.get(address, {params})
            .then((res)=>{
                setItems(res.data.items)
            })
            .catch((err)=>{console.log(err)})
        }
    }, [])

    return (
        <Card className={"my-1 pt-3 border-secondary" + colormode.asClasses}>
            <Card.Title className="ml-3">{`${ t('search_message') } "${ subject }":`}</Card.Title>
            <Card.Body>
                <Row>
                {items.length ? items.map((item, index) => { return (
                    <ItemPrev data={item} key={index} colormode={colormode} t={t}/>
                )}) : <span className="mx-auto my-4">{ t('search_message_empty') }</span> }
                </Row>
            </Card.Body>
        </Card>

    )
})
