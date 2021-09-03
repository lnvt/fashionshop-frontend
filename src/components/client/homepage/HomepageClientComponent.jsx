import React, { Component } from 'react';
import ContentHomePage from '../content-homepage/ContentHomePage';
import FooterComponent from '../footer/FooterComponent';
import MenuHeaderBottomComponent from '../menu-header-bottom/MenuHeaderBottomComponent';
import MenuHeaderTopComponent from '../menu-header-top/MenuHeaderTopComponent';
import MenuRightComponent from '../menu-right/MenuRightComponent';
import MenuLeftComponent from '../menuleft/MenuLeftComponent';
import './HomepageClientComponent';

class HomepageClient extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <div className="header">
                        <MenuHeaderTopComponent />
                        <div className="header_bottom">
                            <MenuHeaderBottomComponent />
                        </div>
                        <div className="header_slide wrap">
                            <div className="header_bottom_left">
                                <MenuLeftComponent />
                            </div>
                            <div className="header_bottom_right">
                                <MenuRightComponent />
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                    <div className="main wrap">
                        <ContentHomePage/>
                    </div>
                </div>
                <div className="footer wrap">
                    <FooterComponent/>
                </div>
                <a href="#" id="toTop"><span id="toTopHover"> </span></a>
            </div>
        );
    }
}

export default HomepageClient;