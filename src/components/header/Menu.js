import React, {Component} from 'react';

export class Menu extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="active"><a >Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a><span className="glyphicon glyphicon-log-in"/> Login</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}