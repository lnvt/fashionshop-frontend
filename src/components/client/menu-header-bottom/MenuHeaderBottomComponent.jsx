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
                        <a href=""> 
                            <img src={bags} alt="bags" /> 
                         </a>
                         <a href=""> 
                            <img src={caps} alt="caps" /> 
                         </a>
                         <a href="">
                            <img src={clothes} alt="clothes" />
                        </a>
                        <a href="">
                            <img src={cosmetics} alt="cosmetics" />
                        </a>
                        <a href="">
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