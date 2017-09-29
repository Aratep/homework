import React, {Component} from 'react';
import {Menu} from './Menu';
import {Logo} from './Logo'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <Logo/>
                <Menu/>
            </nav>
        )
    }
}