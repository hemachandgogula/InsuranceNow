import React, { Component } from 'react';
import './Landingpage.css';
import Header from './header'
import Section from './section'
export default class LandingPage extends Component{
    render(){
        return(
            <div className="backgrnd">
                <Header/>
                <Section/>
            </div>
        );
    }
}