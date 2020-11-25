import React, { Component } from 'react';
import { Container, Button, Grid } from '@material-ui/core';
import QRCode from "react-qr-code";
import Navbar from '../shared/Navbar';
import { XCircle } from 'react-feather';
import AddQR from './AddQR';


class Dashboard extends Component {
    dashboardPage = ()=>{
        return(
            <h1>dash board</h1>
        )
    }
    render() {
        console.log(this.state)
        
        return (
            <>
                <Navbar 
                    dashboard
                    page={this.dashboardPage}
                />
            </>
        );
    }
}

export default Dashboard;