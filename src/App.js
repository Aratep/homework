import React, {Component} from 'react';
import {Header} from './components/header/Header';
import {ContentColumn} from './components/content-column/ContentColumn';
import {RightColumn} from './components/right-column/RightColumn';
import {LeftColumn} from './components/left-column/LeftColumn';
import {Footer} from './components/footer/Footer';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid text-center">
                    <div className="row content">
                        <LeftColumn/>
                        <ContentColumn/>
                        <RightColumn/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
