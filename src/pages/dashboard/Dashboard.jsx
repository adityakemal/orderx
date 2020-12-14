import React, { Component } from 'react';
import { Container, Button, Grid } from '@material-ui/core';
import QRCode from "react-qr-code";
import CmsTemplate from '../shared/CmsTemplate';
import { XCircle } from 'react-feather';
import AddQR from '../qrcode/AddQR';


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
                <CmsTemplate 
                    page={this.dashboardPage}
                />
            </>
        );
    }
}

export default Dashboard;