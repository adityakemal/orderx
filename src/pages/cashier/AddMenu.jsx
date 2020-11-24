import React, { Component } from 'react';
import { Grid, Button, TextField, MenuItem } from '@material-ui/core';
import { FilePlus } from 'react-feather';

class AddMenu extends Component {
    state={
        name: '',
        category: '',
        price: '',
        description: '',
    }


    handleChange = (e)=>{
        console.log(e.target.value);
        this.setState({[e.target.name] : e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault()
    }
    render() {
        const currencies = [
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
          ];
          
        return (
            <div className='add_menu'>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{height: '100vh' }}
                    >
                    <h1>
                        <FilePlus/> Add Menu 
                    </h1>
                    <Grid
                    item
                    sm={4}
                    // justify="center" 
                    // direction="column"
                    // className='bg-blue'
                    // container
                    >
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
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField  className='inp' name='price' onChange={this.handleChange}  label='price' type="number" variant="outlined" required />
                            <TextField multiline rows={4} className='inp' name='description' onChange={this.handleChange}  label='description' type="text" variant="outlined" required />
                            <Button variant="contained" type='submit' color="primary">Submit</Button>

                        </form>


                    </Grid>
                    
                </Grid>
            </div>
        );
    }
}

export default AddMenu;