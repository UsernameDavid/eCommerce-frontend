import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className='nav-wrapper'>
                    <div className="left-side">
                        <NavLink exact to="/">
                            Main
                        </NavLink>
                        <NavLink exact to="/cart">
                            Cart
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}