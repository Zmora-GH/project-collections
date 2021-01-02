import React, {useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import axios from 'axios';

export default function Login() {
    const [isLoading, setLoading] = useState(false);
    const [formData, setFormData] = useState({username: "", password: ""})
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        await axios.post('/api/auth/signin', {...formData})
        .then( (res) => {
            localStorage.setItem('userData' , JSON.stringify({...res.data}));
            window.location.replace('/')
        } )
        .catch( (err) => {
            if (err.response.status === 400) {
                document.getElementById('error-msg-js').textContent = "Invalid Username/Password"
                setTimeout(()=>{document.getElementById('error-msg-js').textContent = ""}, 2000)
            }
        } )
        setLoading(false);
    }
    return (
        <div className="card-form-wrap">
            <Card className="text-white bg-dark my-3">
                <Card.Header as="h5">Sign In</Card.Header>
                <Card.Body>
                    <Form className="card-form mx-3" onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUssername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" name="username" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
                            <Form.Text className="text-danger ">
                                <span id="error-msg-js"></span>
                            </Form.Text>
                        </Form.Group>
                        <div>
                            <Button className="mx-1"variant="success" type="submit" disabled={isLoading}>
                                {isLoading ? 'Loading…' : 'Sign In'}
                            </Button>
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
