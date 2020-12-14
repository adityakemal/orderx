import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import { TextField, Button, Container} from '@material-ui/core';


class Register extends Component {
    state={
        
    }

    handleChange =(e)=>{
        e.preventDefault()
    }

    handleSubmit =(e)=>{
        e.preventDefault()
    }
    render() {
        return (
            <>
            <Navbar/>
            <Container maxWidth='fixed'>
                <div className='register'>
                    <form onSubmit={this.handleSubmit}>
                        <h1>REGISTER</h1>
                        <TextField className='inp' onChange={this.handleChange} name='email'  type='email' label="Email" variant="outlined" required />
                        <TextField className='inp' onChange={this.handleChange} name='name_store'  type='text' label="Cafe / Resto Name" variant="outlined" required />
                        <TextField className='inp' onChange={this.handleChange} name='password'  type='password' label="Password" variant="outlined" required />
                        <TextField className='inp' onChange={this.handleChange} name='c_password'  type='password' label="Confirm password" variant="outlined" required />
                        <Button type='submit'
                        >SUBMIT</Button>
                        <p>Sudah punya akun? <a href="/">Login</a></p>
                    </form>
                </div>
            </Container>
            </>
        );
    }
}

export default Register;