import React from 'react';
import {ListGroup, Form, Button} from 'react-bootstrap';

export default function CommentForm() {
    return (
        <ListGroup.Item
            as="li"
            className="bg-dark text-light comment-item mb-5 mx-auto">
            <Form>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your comment ..."
                    style={{"resize":"none"}}
                    className="bg-dark text-light"
                    />
                <Button
                    variant="outline-secondary mt-1 w-100"
                    type="submit"
                    size="sm"
                    className="float-right"
                    > Submit </Button>
            </Form>
        </ListGroup.Item>
    )
}
