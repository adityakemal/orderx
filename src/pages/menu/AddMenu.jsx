import React, { Component } from 'react';
import { Grid, Button, TextField, MenuItem, Container } from '@material-ui/core';
import { FilePlus } from 'react-feather';
import Navbar from '../shared/Navbar';

class AddMenu extends Component {
    state={
        name: '',
        category: '',
        price: '',
        description: '',
        menuCategory :[
            {
              value: 'drink',
              label: 'Drink',
            },
            {
              value: 'food',
              label: 'Food',
            },
            {
              value: 'desert',
              label: 'Desert',
            }
        ]
    }


    handleChange = (e)=>{
        console.log(e.target.value);
        this.setState({[e.target.name] : e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault()
    }

    finalComp = ()=>(
        <div className='add_menu'>
            <h1>ADD MENU</h1>
                <div
                    // container
                    // direction="column"
                    // justify="center"
                    // alignItems="center"
                    // style={{height: '100vh' }}
                    >
                    <h1>
                    </h1>
                        <form onSubmit={this.handleSubmit}>
                            <TextField className='inp' name='name' onChange={this.handleChange}  label='Name' type="text" variant="outlined" required />
                            <TextField
                                id="standard-select-currency"
                                select
                                label="Category"
                                className='inp'
                                required
                                name='category'
                                value={this.state.category}
                                onChange={this.handleChange}
                                // helperText="Please select your currency"
                                variant="outlined"
                            >
                                {this.state.menuCategory.map((option,i) => (
                                    <MenuItem key={i} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField  className='inp' name='price' onChange={this.handleChange}  label='price' type="number" variant="outlined" required />
                            <TextField  className='inp' name='discount' onChange={this.handleChange}  label='Discount' type="number" variant="outlined" required />
                            <TextField multiline rows={4} className='inp' name='description' onChange={this.handleChange}  label='description' type="text" variant="outlined" required />
                            <Button variant="contained" type='submit' color="primary">Submit</Button>

                        </form>
                    
                </div>
            </div>
    )
    render() {
        return (
            <Navbar isPage page={this.finalComp} />
        );
    }
}

export default AddMenu;