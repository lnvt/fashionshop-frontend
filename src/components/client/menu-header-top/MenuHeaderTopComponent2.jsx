import React, { Component } from 'react';
import './MenuHeaderTopStyle.css';
import 'reactjs-popup/dist/index.css';
import Swal from 'sweetalert2';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MenuHeaderTopComponent2 extends Component {
    constructor() {
        super();
        this.state = {
            product: {},
            show: false,
            retrieveProductCartDatas: [],
        }
    }

    popupCartProduct = () => {
        Swal.fire({
            template: '#my-template'
        })
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }

    render() {
        console.log(this.props.sendDataProductsCartDatas)
        return (
            <div className="headertop">
                <div className="">
                    <div className="styleheader">
                        <ul className="nav-list nav-left">
                            <li className="nav-item"><a href="/#">Salesman</a></li>
                            <li className="nav-item"><a href="/#">Delivery</a></li>
                            <li className="nav-item"><a href="/#">Download</a></li>
                            <li className="nav-item">
                                Connect &nbsp;
                                <button className="btn btn-info bi bi-facebook" style={{ width: 50 }} href="/#"></button> &nbsp;
                                <button className="btn btn-danger bi bi-google" style={{ width: 50 }} href="/#"></button>
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
                                <a href="/about">
                                    About
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
                        <p><a href="/daisyhouse" className="badge homepage">DAISY HOUSE</a></p>
                    </div>
                    <div className="header_item header_top_2">
                        <div className="input-group mb-3" style={{ width: 700 }}>
                            <input type="text" className="form-control" placeholder="Search items" aria-label="Search items" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-danger bi bi-search" style={{ width: 50 }} type="button"></button>
                            </div>
                        </div>
                    </div>
                    <div className="header_item header_top_3">
                        <Button className="btn btn-warning bi bi-cart3" style={{ width: 50 }} onClick={() => this.handleModal()}></Button>
                    </div>
                    <div className="clear" />
                </div>
                <Modal show={this.state.show} onHide={() => this.handleModal()}  className="modalCart">
                    <ModalHeader>
                        <h6>CART PRODUCTS</h6>
                    </ModalHeader>
                    <Modal.Body>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to={{
                            pathname: "/payment"
                        }}>
                            <button className="btn btn-success">Payment</button>
                        </Link>
                        <Button
                            onClick = {() => this.handleModal()}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default MenuHeaderTopComponent2;