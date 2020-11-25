import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state={
        activeMenu : 1
    }
    render() {
        const menus = [
            {id : 1, link: '/dashboard', label: 'Dashboard'},
            {id : 2, link: '/add-menu', label: 'Add Menu'},
            {id : 3, link: '/add-qr', label: 'Add QRCode Order'},
        ]
        const {dashboard, page} = this.props
        console.log(this.props)
        return (
            <div className="navbar_container">

                <nav>
                    <div className="logo">Order<span>X</span></div>
                </nav>
                    {
                        dashboard ? 
                        <Container maxWidth={false} className='nav_dash' >
                        <Grid container spacing={3} >
                            <Grid item sm={2} xs={12} style={{borderRight: '1px solid #e0e0e0', paddingTop : '60px' }}>
                                <div className="dash_menu">
                                    <h3>MENU</h3>
                                    <ul>
                                    {menus.map((res,i)=>
                                    <NavLink activeClassName='active' to={res.link} key={i} >
                                        <li>
                                            <h4>{res.label}</h4>
                                        </li>
                                    </NavLink>
                                    )}
                                        <li><h4>Logout</h4></li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item sm={10} style={{minHeight : '100vh', paddingTop : '60px'}}> 
                                {page()}
                            </Grid>
                        </Grid>
                        
                    </Container>
                        :null
                    }
            </div>
        );
    }
}

export default Navbar;