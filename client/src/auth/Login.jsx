import React from 'react';
import {Form, Button, Card} from 'react-bootstrap';

export default function Login() {
    return (
        <div className="card-form-wrap">
            <Card className="text-white bg-dark my-3">
                <Card.Header as="h5">Sign In</Card.Header>
                <Card.Body>
                    <Form className="card-form mx-3">

                        <Form.Group controlId="formBasicUssername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                            <Form.Text className="text-danger ">
                                ERROR TEXT MESSAGE HERE
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="text-danger ">
                                ERROR TEXT MESSAGE HERE
                            </Form.Text>
                        </Form.Group>
                        <div>
                            <Button className="mx-1"variant="success" type="submit"> Sign In </Button>
                            <span className="mx-2" >or</span>
                            <Button className="mx-1"variant="info" type="submit"> V </Button>
                            <Button className="mx-1"variant="info" type="submit"> G </Button>

                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
