import React, { Component } from 'react';
import { Grid, Button, Fab } from '@material-ui/core';
import { Plus, Minus, Check, Edit } from 'react-feather';



class CardsProduct extends Component {
    state={
        listData : [
            {id:'1', order:0, image: 'https://picsum.photos/id/326/200',name:' Manggo Juice', category: 'drink', price: '15000', description: 'dengan menggunakan buah asli'},
            {id:'2', order:0, image: 'https://picsum.photos/id/324/200',name:' Apple Juice', category: 'drink', price: '15000', description: 'dengan menggunakan buah asli'},
            {id:'3', order:0, image: 'https://picsum.photos/id/36/200',name:' Bannana Juice', category: 'drink', price: '15000', description: 'dengan menggunakan buah asli'},
            {id:'4', order:0, image: 'https://picsum.photos/id/326/200',name:' Melon Juice', category: 'drink', price: '15000', description: 'dengan menggunakan buah asli tapi palsuuuu sdfsa sdfsa dfsaf sf sa f fs'},
            {id:'5', order:0, image: 'https://picsum.photos/id/316/200',name:' Kiwi Juice', category: 'drink', price: '15000', description: 'dengan menggunakan buah asli'},
            
            {id:'6', order:0, image: 'https://picsum.photos/id/326/200',name:' Nasi Goreng', category: 'food', price: '25000', description: 'diolah dengan bahan pilihan.'},
            {id:'7', order:0, image: 'https://picsum.photos/id/322/200',name:' Bakso', category: 'food', price: '25000', description: 'diolah dengan bahan pilihan.'},
            {id:'8', order:0, image: 'https://picsum.photos/id/320/200',name:' Nasi Padang', category: 'food', price: '25000', description: 'diolah dengan bahan pilihan.'},
            {id:'9', order:0, image: 'https://picsum.photos/id/326/200',name:' Sate', category: 'food', price: '25000', description: 'diolah dengan bahan pilihan.'},
            {id:'10',order:0, image: 'https://picsum.photos/id/326/200', name:' Bubur Ayam', category: 'food', price: '25000', description: 'diolah dengan bahan pilihan.'},
        ],
        orderPicked : []
    }


    handleMultipleOrderAdd= (id)=>{
        const dataExist = this.state.listData.filter(res=> res.id === id)
        const dataUnExist = this.state.listData.filter(res=> res.id !== id)
        var results = [...dataUnExist, {...dataExist[0], order : dataExist[0].order + 1}]
        results.sort((a, b) => { 
            return a.id - b.id  ||  a.name.localeCompare(b.name);
        });
        this.setState({ 
            listData : results,
        }, this.orderedFilter)
    }

    handleOrderRemove = (id)=>{
        const dataExist = this.state.listData.filter(res=> res.id === id)
        const dataUnExist = this.state.listData.filter(res=> res.id !== id)
        var results = [...dataUnExist, {...dataExist[0], order : dataExist[0].order - 1}]
        results.sort((a, b) => { 
            return a.id - b.id  ||  a.name.localeCompare(b.name);
        });
        this.setState({ 
            listData : results,
        }, this.orderedFilter)
    }

    orderedFilter = ()=> {
        let orderJson = this.state.listData.filter(res=> res.order !== 0)
        this.setState({ orderPicked :  orderJson })
    }

    render() {
        return (
            <>
            <Grid container spacing={2}>
                {
                    this.state.listData.map((res, i)=>{
                        const {name, description, price, image, id, order} = res
                        return(
                        <Grid item key={id} xs={12} sm={4} >
                            <div className="card_prod" style={order !== 0 ? {border: '1px solid green'} : null}>
                                {order !== 0 ?<div className='choosen'> <Check/> </div>: null}
                                <div className="left">
                                    <div>
                                        <h5>{name}</h5>
                                        <p>{description}</p>
                                        {
                                            order !== 0 ?
                                            <h5>Rp. {price * order }</h5>
                                            :
                                            <h5>Rp. {price}</h5>
                                        }
                                    </div>
                                    <div className="note">
                                       { order !== 0 ? <Fab><Edit /></Fab> : null} 
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={image} alt={name}/>
                                    {
                                        order !== 0?
                                        <div className='adjust_order'>
                                            <button onClick={()=>this.handleOrderRemove(id)}><Minus/></button>
                                            <h4>
                                            {order}
                                            </h4>
                                            <button onClick={()=>this.handleMultipleOrderAdd(id)}><Plus/></button>
                                        </div>
                                        :
                                        <Button onClick={()=> this.handleMultipleOrderAdd(id)} >add</Button>
                                    }
                                </div>

                            </div>
                        </Grid>
                        )
                        
                    })
                }
            </Grid>
            <div className="foot_product">
                <Button disabled={this.state.orderPicked.length === 0} variant="contained" color="primary" onClick={()=>this.props.ordered(this.state.orderPicked)}>
                    Detail Pesanan ( {this.state.orderPicked.length} ) 
                </Button>
            </div>
            </>
        );
    }
}

export default CardsProduct;