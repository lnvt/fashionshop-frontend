import React, { Component } from 'react';
import FooterComponent from '../footer/FooterComponent';
import Swal from 'sweetalert2';

class PaymentComponent extends Component {    

    mappingCart = () => (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={require(`../../imgs_product/SHOES/shoes_19.png`).default} style={{ width: 100 }} alt="" />
                </div>
                <div className="col-8">
                    MLB PLAYBALL MULE MONOGRAM NEW YORK YANKEES WHITE<br />
                    2.500.000 VNĐ<br/>
                </div>
                <hr />
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={require(`../../imgs_product/CLOTHES/clothes_6.png`).default} style={{ width: 100 }} alt="" />
                </div>
                <div className="col-8">
                    Clothes 6<br />
                    1.500.000 VNĐ<br/>
                </div>
                <hr />
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={require(`../../imgs_product/SHOES/shoes_1.png`).default} style={{ width: 100 }} alt="" />
                </div>
                <div className="col-8">
                    MLB PLAYBALL ORIGIN MULE NEW YORK YANKEES BLACK<br />
                    1.499.000<br/>
                </div>
                <hr />
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={require(`../../imgs_product/COSMETICS/cosmetic_1.png`).default} style={{ width: 100 }} alt="" />
                </div>
                <div className="col-8">
                Foodaholic Diamond - Brightening 23g<br />
                8.500<br/>
                </div>
                <hr />
            </div>
        </div>
    )

    confirmPayment = () => {
        var cost = 9900000;
        Swal.fire({
            title: 'Payment order',
            text: `Cost: ${cost}`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Pay'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Success',
                'Your order has been successfully paid',
                'success'
              )
              this.props.history.push('/daisyhouse')
            }
          })
    }

    render() {
        console.log(this.props.sendCartProductsDataState);
        return (
            <div>
                <div className="">
                    <div className="header">
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
                                    <button className="btn btn-warning bi bi-cart3" style={{ width: 50 }}></button>
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                    </div>
                    {this.mappingCart()}
                    <button className = "btn btn-success" onClick  = {this.confirmPayment}>Payment</button>
                    <div className="footer">
                        <FooterComponent />
                    </div>
                </div>
              
            </div>
        );
    }
}

export default PaymentComponent;