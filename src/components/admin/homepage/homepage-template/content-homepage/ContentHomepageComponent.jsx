import React, { Component } from 'react';
import FooterHomepageComponent from '../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../header-homepage/HeaderHompageComponent';
import './ContentHomepageStyle.css';
class ContentHomepageComponent extends Component {
    render() {
        return (
            <div className = "contentPage">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <HeaderHompageComponent />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1>Dashboard</h1>
                            </div>
                            <div className="row">


                            </div>
                        </div>
                    </div>
                    <FooterHomepageComponent />
                </div>
            </div>
        );
    }
}

export default ContentHomepageComponent;