import React, { Component } from 'react';
import { TextField, Button} from '@material-ui/core';
// import { LogIn } from 'react-feather';

class Login extends Component {
    render() {
        return (
            <div className='login'>
                <form>
                    <TextField className='inp'  type='email' label="Email" variant="outlined" />
                    <TextField className='inp'  type='password' label="Password" variant="outlined" />
                    <Button
                        variant="contained"
                        size="large"
                        // startIcon={<LogIn />}
                    >Login</Button>
                </form>
            </div>
        );
    }
}

export default Login;