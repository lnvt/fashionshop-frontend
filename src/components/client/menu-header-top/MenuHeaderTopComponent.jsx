import React, { Component } from 'react';
import './MenuHeaderTopStyle.css';

class MenuHeaderTopComponent extends Component {
    render() {
        return (
            <div className = "headertop">
                <div className="">
                    <div className="styleheader">
                        <ul className="nav-list nav-left">
                            <li className="nav-item"><a href="/#">Salesman</a></li>
                            <li className="nav-item"><a href="/#">Delivery</a></li>
                            <li className="nav-item"><a href="/#">Download</a></li>
                            <li className="nav-item">
                                Connect &nbsp;
                                <button className="btn btn-info bi bi-facebook" href="/#"></button> &nbsp;
                                <button className="btn btn-danger bi bi-google" href="/#"></button>
                            </li>
                        </ul>
                        <ul className="nav-list nav-right">
                            <li className="nav-item">
                                <a href="/#">
                                    Notification
                                </a> &nbsp;
                                <i className="bi bi-bell"></i>
                            </li>
                            <li className="nav-item">
                                <a href="/#">
                                    Support
                                </a> &nbsp;
                                <i className="bi bi-question-octagon"></i>
                            </li>
                            <li className="nav-item"><a href="/#">Sign in</a></li>
                            <li className="nav-item"><a href="/#">Sign up</a></li>
                        </ul>
                        <div className="clear" />
                    </div>
                </div>
                <div className="header_top" style={{ backgroundColor: "#e7879a" }}>
                    <div className="header_item header_top_1">
                        <p>DAISY HOUSE</p>
                    </div>
                    <div className="header_item header_top_2">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search items" aria-label="Search items" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-danger bi bi-search" type="button"></button>
                            </div>
                        </div>
                    </div>
                    <div className="header_item header_top_3">
                        <button className="btn btn-warning bi bi-cart3"></button>
                    </div>
                    <div className="clear" />
                </div>
            </div>
        );
    }
}

export default MenuHeaderTopComponent;