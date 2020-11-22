import React, { Component } from 'react';
import { Container, Button } from '@material-ui/core';
import CardsProduct from './components/CardsProduct';
import ModalTemplate from '../shared/ModalTemplate';
import { Send } from 'react-feather';



class ListProduct extends Component {
    state={
        modal : false,
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
    modalClose= ()=> this.setState({modal : false})
    handleWA = ()=>{
        const waMessage= `---Meja+${this.props.match.params.idTable}---%0D%0A${this.state.listOrderString.join('%0D%0A')}%0D%0A-------------------------%0D%0A+TOTAL:+RP.${this.state.totalOrder}%0D%0ADitunggu+kak+pesananya+:)`
        window.location.href = `https://wa.me/6281296760145?text=${waMessage}`
    }

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
                        <li> 
                            <p>{res.name} </p> 
                            <p>{res.order}</p> 
                            <p>Rp {res.price !== 0 ? res.price * res.order : res.price}</p>
                        </li>
                    )
                }
                <li className='total'>
                    <h4>Total</h4>
                    <h4>Rp {this.state.totalOrder}</h4>
                </li>
            </ul>
            <Button endIcon={<Send/>} onClick={this.handleWA} variant="contained" color="primary">Pesan Sekarang</Button>
        </div>
    )

    
    render() {
        console.log(this.state)
        
        return (
            <>
            <ModalTemplate 
                onOpen={this.state.modal} 
                onClose={this.modalClose}
                component={this.listOrderModal}
            />
            <div className='list_prod'>
                <h1>List Menu</h1>
                <Container>
                    <CardsProduct 
                    ordered={ this.ordered }
                    />
                </Container>

            </div>
            </>
        );
    }
}

export default ListProduct;