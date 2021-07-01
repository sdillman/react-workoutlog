import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; //1

const Signup = (props) => {
const [username, setUsername] = useState(''); //2
const [password, setPassword] = useState(''); //2

return(
    <div>
    <h1>Sign Up</h1>
    <Form>
        <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input name="username" value={username}/>
        </FormGroup>
        <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input name="password" value={password}/>
        </FormGroup>
        <Button type="submit">Sign Up</Button>
    </Form>
    </div>
)
}

export default Signup;