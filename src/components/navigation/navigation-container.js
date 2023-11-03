import { IconButton, Badge } from '@material-ui/core';
import { ShoppingCartRounded, HomeRounded, AccountCircleRounded } from '@material-ui/icons';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className='nav-wrapper'>
                    <div className="left-side">
                        <img src="https://i.ibb.co/Gn3pyYh/Ecommerce-Logo.png" />
                        Online Shopping
                    </div>
                    <div className="right-side">
                        <NavLink exact to="/">
                            <IconButton aria-label='home'>
                                <HomeRounded fontSize='large' />
                            </IconButton>
                        </NavLink>
                        <NavLink exact to="/cart">
                            <IconButton aria-label='cart'>
                            <Badge badgeContent={this.props.myCart.length} color="secondary">
                                <ShoppingCartRounded fontSize='large' />
                            </Badge>
                            </IconButton>
                        </NavLink>
                        <NavLink exact to="/signin">
                            <IconButton aria-label='signin'>
                                <AccountCircleRounded fontSize='large' />
                            </IconButton>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}