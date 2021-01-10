import React, {useState} from 'react';
import {Row, Col, Spinner} from 'react-bootstrap';

import Comment from './Comment';
import CommentForm from './CommentForm';

export default function CommentBox() {
    const [loading, setLoading] = useState(false)

    return (
        <Row className="mt-4 mx-auto">
            <Col lg={12} >
                { loading ?
                    <div className="w-100 text-center my-5">
                        <Spinner animation="border" role="status"></Spinner>
                    </div>
                :   <div>
                        <Comment />
                        <Comment />
                        <Comment />

                        <CommentForm />
                    </div>
                }
            </Col>
        </Row>
    )
}
