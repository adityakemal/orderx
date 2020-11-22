import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Plus, Minus } from 'react-feather';



class CardsProduct extends Component {
    state={
        listData : [
            {id:'1', order:0, image: 'https://picsum.photos/id/326/200',name:' Manggo Juice', category: 'drink', price: '15000', description: 'dengan menggunakan buah asli'},
            {id:'2', order:0, image: 'https://picsum.photos/id/326/200',name:' Apple Juice', category: 'drink', price: '15000', description: 'dengan menggunakan buah asli'},
            {id:'3', order:0, image: 'https://picsum.photos/id/326/200',name:' Bannana Juice', category: 'drink', price: '15000', description: 'dengan menggunakan buah asli'},
            {id:'4', order:0, image: 'https://picsum.photos/id/326/200',name:' Melon Juice', category: 'drink', price: '15000', description: 'dengan menggunakan buah asli tapi palsuuuu sdfsa sdfsa dfsaf sf sa f fs'},
            {id:'5', order:0, image: 'https://picsum.photos/id/326/200',name:' Kiwi Juice', category: 'drink', price: '15000', description: 'dengan menggunakan buah asli'},
            
            {id:'6', order:0, image: 'https://picsum.photos/id/326/200',name:' Nasi Goreng', category: 'food', price: '25000', description: 'diolah dengan bahan pilihan.'},
            {id:'7', order:0, image: 'https://picsum.photos/id/326/200',name:' Bakso', category: 'food', price: '25000', description: 'diolah dengan bahan pilihan.'},
            {id:'8', order:0, image: 'https://picsum.photos/id/326/200',name:' Nasi Padang', category: 'food', price: '25000', description: 'diolah dengan bahan pilihan.'},
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
            <Grid container spacing={3}>
                {
                    this.state.listData.map((res, i)=>{
                        const {name, description, price, image, id, order} = res
                        return(
                        <Grid key={id} item xs={12} sm={6} >
                            <div className="card_prod">
                                <div className="left">
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    {
                                        order !== 0 ?
                                        <h3>Rp. {price * order }</h3>
                                        :
                                        <h3>Rp. {price}</h3>
                                    }
                                </div>
                                <div className="right">
                                    <img src={image} alt={name}/>
                                    {
                                        order !== 0?
                                        <div className='adjust_order'>
                                            <button onClick={()=>this.handleOrderRemove(id)}><Minus/></button>
                                            <h3>
                                            {order}
                                            </h3>
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
                <Button variant="contained" color="primary" onClick={()=>this.props.ordered(this.state.orderPicked)}>
                    Detail Pesanan ( {this.state.orderPicked.length} ) 
                </Button>
            </div>
            </>
        );
    }
}

export default CardsProduct;