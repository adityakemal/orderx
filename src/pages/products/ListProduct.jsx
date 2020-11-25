import React, { Component } from 'react';
import { Container, Button, Grid } from '@material-ui/core';
import CardsProduct from './components/CardsProduct';
import ModalTemplate from '../shared/ModalTemplate';
import Navbar from '../shared/Navbar';



class ListProduct extends Component {
    state={
        modal : false,
        modalNote : false,
        orderData : [],
        totalOrder : 0,
        listOrderString : [],
    }
    
    ordered = (data) =>{
        console.log(data, 'ORDERED')
        this.setState({
            modal : true, 
            orderData: data
        }, ()=>{
            // text url encode maker
            const arrList =this.state.orderData.map(res=>
                `-${res.name} (${res.order}) / Rp.${res.price !== 0 ? res.price * res.order : res.price}`
            )
            // total 
            const total = this.state.orderData.map(res=> res.order !== 0 ? res.price* res.order : res.price)
            this.setState({
                totalOrder : total.reduce((a, b) => a + b, 0),
                listOrderString : arrList
            })
        })
    }
    handleWA = ()=>{
        const waMessage= `---Meja+${this.props.match.params.idTable}---%0D%0A${this.state.listOrderString.join('%0D%0A')}%0D%0A-------------------------%0D%0A+TOTAL:+RP.${this.state.totalOrder}%0D%0ADitunggu+kak+pesananya+:)`
        window.location.href = `https://wa.me/6281296760145?text=${waMessage}`
    }
    
    modalClose= ()=> this.setState({modal : false})

    listOrderModal = ()=> (
        <div className='modal_list_order'>
            <h3>List Order:</h3>
            <ul>
                <li>
                    <h4> Nama Pesanan</h4>  
                    <h4>Jumlah Pesanan</h4> 
                    <h4>Harga</h4>
                </li>
                {
                    this.state.orderData.map((res,i)=> 
                        <li key={i}> 
                            <p>{i + 1}. {res.name} </p> 
                            <p>{res.order}</p> 
                            <p>Rp {res.price !== 0 ? res.price * res.order : res.price}</p>
                        </li>
                    )
                }
                <li className='total'>
                    <h4>Total Pesanan</h4>
                    <h4>{this.state.orderData.length} item</h4>
                </li>
                <li className='total'>
                    <h4>Total Harga</h4>
                    <h4>Rp {this.state.totalOrder}</h4>
                </li>
            </ul>
            <Button endIcon={<i className="fab fa-whatsapp"></i>} onClick={this.handleWA} variant="contained" >Pesan Sekarang Melalui WhatsApp</Button>
        </div>
    )

    
    render() {
        console.log(this.state)
        return (
            <>
            <Navbar />
            <Container maxWidth="fixed">
            <ModalTemplate 
                onOpen={this.state.modal} 
                onClose={this.modalClose}
                component={this.listOrderModal}
            />
           
            <div className='list_prod'>
                    <Grid container spacing={3}>
                        <Grid sm={2} xs={12} item style={{borderRight: '1px solid #e0e0e0'}}>
                            <div className="kategori">
                                <h3>KATEGORI</h3>
                                <ul>
                                    <li className='active'><h4>Semua</h4></li>
                                    <li><h4>Makanan</h4></li>
                                    <li><h4>Minuman</h4></li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid sm={10} item>
                            <h3>DAFTAR MENU - Nama Resto</h3>
                            <CardsProduct 
                            ordered={ this.ordered }
                            />
                        </Grid>
                        {/* <Grid sm={2} item>sdffs</Grid> */}
                    </Grid>

            </div>
            </Container>
            </>
        );
    }
}

export default ListProduct;