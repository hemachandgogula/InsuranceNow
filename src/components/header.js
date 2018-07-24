import React, { Component } from 'react';
import './header.css';
// import {BrowserRouter as Router, Route, Link}   from 'react-router-dom';
import { Button } from '../../node_modules/primereact/button';
import { SplitButton } from '../../node_modules/primereact/splitbutton';
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="headr">
                    <Button className="secondary" label={<img src="./logo2.png" />} id="image" />
                    <Button className="secondary" label="Home" />
                    <Button className="secondary" label="About" />
                    <Button className="secondary" label="Tamplates" />
                    <Button className="secondary" label="Blog" />
                    <Button className="secondary" label="Contact" />
                </div>
                <div className="section1">
                    <center><strong> Protect Your Family With Insurance.</strong></center>
                <p className="des">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                      tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                 </p>
                <center> <Button className="secondary" id="findmore" label="find more" /></center>
                </div>
            </div>
        );
    }
}