import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Signup() {
    return (
        <div>
            <h1>Sign Up</h1>
        <Form>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label className='d-none'>Email</Form.Label>
                <Form.Control
                    type="email" placeholder="Enter email" name="email"
                />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label className='d-none'>username</Form.Label>
                <Form.Control
                    type="text" placeholder="username" name="username"
                />
                <Form.Text className="text-muted">
                How would you like other users to see you.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password1">
                <Form.Label className='d-none'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password2">
                <Form.Label className='d-none'>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Suign Up
            </Button>
            </Form>
            <div>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    )
}

export default Signup;