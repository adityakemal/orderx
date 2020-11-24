import React, { Component } from 'react';
import { Container, Button, Grid } from '@material-ui/core';
import QRCode from "react-qr-code";
import Navbar from '../shared/Navbar';
import { XCircle } from 'react-feather';


class Dashboard extends Component {
    state={
        table:[]

    }
    addTable = (e)=>{
        this.setState({table : [...this.state.table, { id : this.state.table.length + 1}]})
        e.preventDefault()
    } 

    removeTable= (id)=>{
        const removeById = this.state.table.filter(res=> res.id !== id)
        this.setState({table : removeById})
    }

    render() {
        console.log(this.state)
        return (
            <div className='dash'>
                <Navbar />
                <Container>
                    <h1>QR Code</h1><br/>
                    <form onSubmit={this.addTable}>
                        <Button variant="contained" type='submit' color="primary">
                            Add Table qr code
                        </Button>

                    </form>
                    <br/>
                    <br/>
                    <Grid container spacing={3}>
                        {
                            this.state.table.map((res,i)=>(
                            <Grid item xs={12} sm={4} key={i} className='box_table'>
                                <div className="title">
                                    <h2>table {res.id}</h2>
                                    <XCircle onClick={()=>this.removeTable(res.id)} />
                                </div>
                                <QRCode value={`http://192.168.1.2:3000/products/name_resto/${res.id}`} size={300}/>
                            </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            
            </div>
        );
    }
}

export default Dashboard;