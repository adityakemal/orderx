import React, { Component } from 'react';
import QrCode from 'react.qrcode.generator'
// library doc https://classic.yarnpkg.com/en/package/react.qrcode.generator

class Dashboard extends Component {
    state={
        table:[]

    }
    addTable = ()=> this.setState({table : [...this.state.table, this.state.table.length + 1]})
    render() {
        return (
            <div className='dash'>
                <h1>QR Code</h1><br/>
                <div>
                    {
                        this.state.table.map((res,i)=>(
                            <div key={i}>
                                <h2>table {res}</h2>
                                <br/>
                                <QrCode value={`http://192.168.1.2:3000/products/name/${res}`} size={300}/>
                            </div>
                        ))
                    }

                </div>
                <button onClick={this.addTable}>add</button>
            </div>
        );
    }
}

export default Dashboard;