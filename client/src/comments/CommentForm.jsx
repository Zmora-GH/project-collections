import React, {useContext, useState} from 'react';
import {Form, Button, Toast} from 'react-bootstrap';
import {AuthContext} from '../core/context';
import axios from 'axios';

export default function CommentForm(props) {
    const {isAuth, userId} = useContext(AuthContext);
    const [comment, setComment] = useState({itemId: props.itemId, userId: userId, text: ''})

    const changeHandle = (event)=>{
         setComment({...comment, text: event.target.value})
    }

    const submitHandle = (event)=>{
        event.preventDefault();
        event.target.reset()
        axios.post('/api/comments/add', comment)
        .then((res)=>{
            props.onSubmitGetComment()
        })
        .catch((err)=>{console.log(err)})
    }
    if (!isAuth) { return ''} else {
    return (
        <Toast className={"mx-auto" + props.colormode.asClasses}>
            <Form onSubmit={submitHandle}>
                <Form.Control
                    onChange={changeHandle}
                    as="textarea"
                    rows={3}
                    placeholder={props.t('item_comments_placeholder')}
                    style={{"resize":"none"}}
                    className={props.colormode.asClasses}
                    />
                <Button
                    variant="outline-secondary mt-1 w-100"
                    type="submit"
                    size="sm"
                    className="float-right"
                    > {props.t('item_comments_submit')} </Button>
            </Form>
        </Toast>
    )}
}
