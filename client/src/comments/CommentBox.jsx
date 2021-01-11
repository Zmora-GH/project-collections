import React, {useState, useEffect} from 'react';
import {Row, Col, Spinner} from 'react-bootstrap';

import Comment from './Comment';
import CommentForm from './CommentForm';

export default function CommentBox(props) {
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        // запрос на коменты раз в 5 сек {props.itemId}
    }, [])

    return (
        <Row className="mt-4 mx-auto">
            <Col lg={12} >
                <Comment />
                <Comment />
                <Comment />
                <CommentForm />
            </Col>
        </Row>
    )
}
