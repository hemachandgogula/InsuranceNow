import React, { Component } from 'react';
import './header.css';
// import {BrowserRouter as Router, Route, Link}   from 'react-router-dom';
import { Button } from '../../node_modules/primereact/button';
// import { SplitButton } from '../../node_modules/primereact/splitbutton';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Button className="secondary" label={<img src="./logo2.png" />} id="image" />
                    <Button className="secondary" label="Home" />
                    <Button className="secondary" label="About" />
                    <Button className="secondary" label="Templates" />
                    <Button className="secondary" label="Blog" />
                    <Button className="secondary" label="Contact" />
                    </div>
            </div>
        );
    }
}