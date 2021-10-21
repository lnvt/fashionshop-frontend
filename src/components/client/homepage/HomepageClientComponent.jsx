import React, { Component } from 'react';
import ContentHomePage from '../content-homepage/ContentHomePage';
import FooterComponent from '../footer/FooterComponent';
import MenuHeaderBottomComponent from '../menu-header-bottom/MenuHeaderBottomComponent';
import MenuHeaderTopComponent from '../menu-header-top/MenuHeaderTopComponent';

import './HomepageClientComponent';

class HomepageClient extends Component {


    constructor(props) {
        super(props);
        this.state = {
            retrievecartProductDatas: []
        }
    }


    retrieveCartProductDataFromContent = (cartProductDatas) => {
        this.setState({
            retrievecartProductDatas: cartProductDatas
        })
        
    }

    retrieveCartProductsIntoCartFromContent  = (productId) => {
        this.setState({
            retrievecartProductDatas:productId
        })
    }

    render() {
        return (
            <div>
                <div className="">
                    <div className="header">
                        <MenuHeaderTopComponent 
                            sendDataProductsCartDatas = {this.state.retrievecartProductDatas}/>
                        <div className="header_bottom">
                            <MenuHeaderBottomComponent />
                        </div>
                    </div>
                    <div className="main wrap">
                        <ContentHomePage 
                            getCartProductDataFromContent = {(cartProductDatas) => this.retrieveCartProductDataFromContent(cartProductDatas)}
                            getProductsIntoCart = {(productId) => this.retrieveCartProductsIntoCartFromContent(productId)}/>
                    </div>
                </div>
                <div className="footer wrap">
                    <FooterComponent />
                </div>
                <a href="/#" id="toTop"><span id="toTopHover"> </span></a>
            </div>
        );
    }
}

export default HomepageClient;