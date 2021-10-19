import React, { Component } from 'react';
import './MenuLeftStyle.css';

class MenuLeftComponent extends Component {
    render() {
        return (
            <div>
                <div className="menuleft"> 
                    <img src={require(`../../imgs_product/SLIDESHOW/slideshow_3.jpg`).default} style={{ width: 100 }} alt="" />
                </div>
            </div>
        );
    }
}

export default MenuLeftComponent;