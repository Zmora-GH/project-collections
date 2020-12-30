import React from 'react';
import {Form, Button, Card} from 'react-bootstrap';

export default function Signup() {
    return (
        <div className="card-form-wrap">
            <Card className="text-white bg-dark my-3">
                <Card.Header as="h5">Sign Up</Card.Header>
                <Card.Body>
                    <Form className="card-form mx-3">

                        <Form.Group controlId="formBasicUssername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                            <Form.Text className="text-danger ">
                                ERROR TEXT MESSAGE HERE
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicUser">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Create an Account
                        </Button>
                    </Form>
                </Card.Body>

            </Card>
        </div>
    )
}
