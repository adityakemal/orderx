import React, { Component } from 'react';
import { TextField, Button, Container} from '@material-ui/core';
import Navbar from '../shared/Navbar.jsx';
// import { LogIn } from 'react-feather';

class Login extends Component {
    handleChange =(e)=>{
        e.preventDefault()
    }

    handleSubmit =(e)=>{
        e.preventDefault()
    }
    render() {
        return (
        <>
            <Navbar />
            <Container maxWidth='fixed' >
                <div className='login'>
                    <form onSubmit={this.handleSubmit}>
                        <h1>LOGIN</h1>
                        <TextField className='inp' onChange={this.handleChange}  type='email' label="Email" variant="outlined" required />
                        <TextField className='inp' onChange={this.handleChange}  type='password' label="Password" variant="outlined" required />
                        <Button type='submit' >SUBMIT</Button>
                        <p>Belum punya akun? <a href="/register">Register</a></p>
                    </form>
                </div>
            </Container>
        </>
        );
    }
}

export default Login;