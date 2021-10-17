import React, { Component } from 'react';
import CartService from '../../../../../services/CartService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import { Link } from 'react-router-dom';

class CartContentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            carts: [],
            cart: {},
        }
    }

    componentDidMount = () => {
        this.retrieveAllCart();
    }

    retrieveAllCart = () => {
        CartService.retrieveAllCartService()
        .then(response => {
            console.log(response)
            this.setState({
                carts: response.data
            })
        })
    }

    deleteAccountClicked = (cartId) => {
        console.log(cartId)
    }

    mappingDataAllCarts = () => this.state.carts.map((item, key) => (
        <tr key={item.cartId}>
            <th scope="row">{item.cartId}</th>
            <td>{item.cartName}</td>
            <td>{item.cartDate}</td>
            <td>{item.fkPaymentCart}</td>
            <td>{item.fkProductCart}</td>
            <td>
                <Link to={{
                    pathname: `/cart/${item.cartId}`
                }}>
                <button className="btn btn-warning"> Update </button>
                </Link>
                &nbsp;
                <button className="btn btn-danger"
                    onClick={() => this.deleteAccountClicked(item.cartId)}> Delete </button>
            </td>
        </tr>
    ))

    render() {
        return (
            <div className="contentPage">
            <div id="content-wrapper bg-white" className="d-flex flex-column">
                <div id="content">
                    <HeaderHompageComponent />
                    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1>Cart</h1>
                        </div>
                        <div className="d-flex bd-highlight">
                            <div className="p-2 w-100 bd-highlight">
                                <table className="table table-hover table_management ">
                                    <thead className="table-info">
                                        <tr>
                                            <th scope="col">Cart ID</th>
                                            <th scope="col">Cart name</th>
                                            <th scope="col">Cart date</th>
                                            <th scope="col">PaymentCart</th>
                                            <th scope="col">Account</th>
                                            <th scope="col">Feature</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.mappingDataAllCarts()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterHomepageComponent />
            </div>
        </div>
        );
    }
}

export default CartContentComponent;