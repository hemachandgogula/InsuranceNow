import React, { Component } from 'react';
import { Button } from '../../node_modules/primereact/button';
import './section.css';
export default class Section extends Component {
    render() {
        return (
            <div>
                <div className="section1">
                    <center><strong> Protect Your Family With Insurance.</strong></center>
                    <p className="des">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
</p>
                    <center> <Button className="secondary" id="findmore" label="find out more" /></center>
                </div>
                <div className="section2">
                    <div className="heading"> <b> This is the heading element</b> </div>
                    <p className="des1">
                        <p> From insurance website research, we have got that an insurance website should
                        have service section to show its provided insurances services in front of their visitors. this insurance theme has a credible Service section that can help you to do convert your visitors into real clients. So, you can use this WP theme effortlessly.</p>
                        <p>You will be glad to know that you can customize your website according to your demand. Further, you don’ need to do any programming on coding skill.
                        You will be able to change for any kind of customization using theme customizer. By using color options, you can change the color according to your need. You can change any section from your site without any troubles. In Insurance Now Pro theme,
                        we have added one-click demo installation. You can make your website like our demo with the help of one-click demo installation.So, this feature will save your valuable time.</p>
                    </p>
                </div>
                <div className="section3">
                    <div className="head"> <strong>How We Can Help</strong> </div>
                    <p className="content">
                        <p>We offer a wealth of other insurance products including Home Insurance, Travel Insurance, Pet Insurance and Van Insurance. This means that we can offer all your insurance needs in one place and with our existing customer discounts we could save you time and money.</p>
                        <p>As we were voted Best Insurance Provider by consumers four years running you know that you are in good hands with us. Every 12 seconds a new customer joins our insurance Group, get a quote today and see how much you could save.</p>
                    </p>
                </div>
                {/* <div className="section4">
                    <div className="left"> <strong>This is heading element</strong>
                        <p>
                            <p> We offer a wealth of other insurance products including Home Insurance, Travel Insurance, Pet Insurance and Van Insurance. This means that we can offer all your insurance needs in one place and with our existing customer discounts we could save you time and money.</p>
                            <p>As we were voted Best Insurance Provider by consumers four years running you know that you are in good hands with us. Every 12 seconds a new customer joins our insurance Group, get a quote today and see how much you could save.</p>
                        </p>
                    </div>
                    <div className="right"> <strong>This is heading element</strong> </div>
                    <p>
                        <p> We offer a wealth of other insurance products including Home Insurance, Travel Insurance, Pet Insurance and Van Insurance. This means that we can offer all your insurance needs in one place and with our existing customer discounts we could save you time and money.</p>
                        <p>As we were voted Best Insurance Provider by consumers four years running you know that you are in good hands with us. Every 12 seconds a new customer joins our insurance Group, get a quote today and see how much you could save.</p>
                    </p>
                 </div> */}
        </div>
        );
    }
}