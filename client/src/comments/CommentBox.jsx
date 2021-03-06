import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';

import Comment from './Comment';
import CommentForm from './CommentForm';

export default function CommentBox(props) {
    const [firstLoad, setFirstLoad] = useState(true)
    const [comments, setComments] = useState([])
    const [intID, setIntID] = useState(null)

    const getComments = ()=>{
        let params = {itemId: props.itemId}
        axios.get('/api/comments', {params})
        .then((res)=>{
            setComments(res.data.comments)
        })
        .catch((err)=>{ console.log(err) })
    }

    useEffect(()=>{
        if (firstLoad) { getComments(); setFirstLoad(false); }
        if (props.isOpen && !intID) {
            setIntID( setInterval(()=>{ getComments() }, 4999) );
        } else if (!props.isOpen && intID) {
            clearInterval(intID);
            setIntID(null)
        }
    }, [props.isOpen])

    return (
        <Row className="mt-4 mx-auto">
            <Col lg={12} >
                {comments.map((comment, index)=> <Comment data={comment} key={index} colormode={props.colormode}/>)}
                <CommentForm
                    itemId={props.itemId}
                    onSubmitGetComment={()=>{getComments()}}
                    colormode={props.colormode}
                    t={props.t}/>
            </Col>
        </Row>
    )
}
