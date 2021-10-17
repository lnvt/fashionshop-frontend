import React, { Component } from 'react';
import bags from './img-menu/bags.png';
import caps from './img-menu/caps.png';
import clothes from './img-menu/clothes.png';
import cosmetics from './img-menu/cosmetics.png';
import shoes from './img-menu/shoes.png';
import './MenuHeaderBottomStyle.css';

class MenuHeaderBottomComponent extends Component {
    render() {
        return (
            <div className="menu-bottom">
                <ul>
                    <li>
                        <a href="/listproduct/1"> 
                            <img src={bags} alt="bags" /> 
                         </a>
                         <a href="/listproduct/2"> 
                            <img src={caps} alt="caps" /> 
                         </a>
                         <a href="/listproduct/3">
                            <img src={clothes} alt="clothes" />
                        </a>
                        <a href="/listproduct/4">
                            <img src={cosmetics} alt="cosmetics" />
                        </a>
                        <a href="/listproduct/5">
                            <img src={shoes} alt="shoes" />
                        </a>
                    </li>
                </ul>
                <div className="clear" />
            </div>
        );
    }
}

export default MenuHeaderBottomComponent;