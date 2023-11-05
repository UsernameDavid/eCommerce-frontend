import { IconButton, Badge } from '@material-ui/core';
import { ShoppingCartRounded, HomeRounded, PersonAdd, HowToReg, ExitToApp } from '@material-ui/icons';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from "../auth/firebase";

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
                            <Badge badgeContent={this.props.myCart.length} color="secondary" overlap="rectangular">
                                <ShoppingCartRounded fontSize='large' />
                            </Badge>
                            </IconButton>
                        </NavLink>
                        <NavLink exact to="/signin">
                            <IconButton aria-label='signin'>
                             {this.props.loggedInStatus === "LOGGED_IN" ? <HowToReg fontSize='large' /> : <PersonAdd fontSize='large' />}
                            </IconButton>
                        </NavLink>
                        {this.props.loggedInStatus === "LOGGED_IN" ?
                            <IconButton aria-label='logOut' onClick={
                                () => (auth.signOut(),
                                this.props.updateUserAndPassword("", "")
                                )
                                }>
                                <ExitToApp fontSize='large' />
                            </IconButton>
                        :
                        null}
                    </div>
                </div>
            </div>
        )
    }
}