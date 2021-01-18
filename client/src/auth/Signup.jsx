import React, {useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import axios from 'axios';

import GoogleAuth from './GoogleAuth';

export default function Signup() {
    const [isLoading, setLoading] = useState(false);
    const [formData, setFormData] = useState({email: "", username: "", password: ""})
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        await axios.post('/api/auth/signup', {...formData})
        .then( (res) => {
            window.location.replace('/login')
        } )
        .catch( (err) => {
            if (err.response.status === 400) {
                document.getElementById('error-msg-js').textContent = err.response.data.message
                setTimeout(()=>{document.getElementById('error-msg-js').textContent = ""}, 2000)
            }
        } )
        setLoading(false);
    }
    return (
        <div className="card-form-wrap">
            <Card className="text-white bg-dark my-3">
                <Card.Header as="h5">Sign Up</Card.Header>
                <Card.Body>
                    <Form className="card-form mx-3" onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUssername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" name="username" onChange={handleChange}/>
                            <Form.Text className="text-danger ">
                                <span id="error-msg-js"></span>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicUser">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Button size="sm" className="my-1 btn-block" variant="success" type="submit" disabled={isLoading}>
                                {isLoading ? 'Loading…' : 'Create an Account'}
                            </Button>
                            <div> or ... </div>
                            <GoogleAuth setLoadingState={setLoading}/>
                        </Form.Group>
                    </Form>
                </Card.Body>

            </Card>
        </div>
    )
}
