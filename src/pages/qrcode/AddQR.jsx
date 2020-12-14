import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';
import QRImage from "react-qr-image";
// import { XCircle } from 'react-feather';
import CmsTemplate from '../shared/CmsTemplate';

const urlBase = 'https://orderx-staging.web.app'

class AddQR extends Component {
    state={
        tables : [],
        tableValue : 0
    }
    
    handleChange = (e) =>{
        this.setState({tableValue : e.target.value || 0})
        console.log(e.target.value)
    }

    qr = (id) => (
        <QRImage
            text={`${urlBase}/products/name_resto/${id + 1}`}
            color="red"
            name='hello'
            style={{width : '100%'}}
            onLoad={(e) => {
            this.setState({[`file${id + 1}`] : e.target.src})
            console.log(e.target.name)
            }
            }
        />
    );

    handlePrint = (id) =>{
        var URL = "http://myimage.jpg"
        var W = window.open(URL);
        W.window.print();
    }

    finalComponent = () =>{
        const listQR = new Array(parseInt(this.state.tableValue)).fill('')
        console.log(listQR)
        return(
            <div className='qrcode'>
                <h1>QR CODE</h1>
                <TextField type="number" onChange={this.handleChange} min='0' label="Masukan jumlah meja" variant="filled"/>
                <Grid container spacing={3}>
                    {
                        listQR.map((res,i)=>(
                        <Grid item xs={12} sm={4} key={i} className='box_table'>
                            <div className="title">
                                <h2 style={{marginBottom : 0}}>Meja {i + 1}</h2>
                                {/* <XCircle onClick={()=>this.removeTable(i)} /> */}
                            </div>
                            {this.qr(i)}
                            <i><a href={this.state[`file${i+1}`]} download={`QRCODE_TABLE_${i+1}`}> Download QRCode meja {i+1} </a></i>
                            {/* <b onClick={()=>this.handlePrint(i+1)}>print QR</b> */}
                        </Grid>
                        ))
                    }
                </Grid>

            </div>
        )
    }

    render() {
        console.log(this.state)
        return (
            <CmsTemplate page={this.finalComponent} />
        );
    }
}

export default AddQR;