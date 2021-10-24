import React, { Component } from 'react';
import CartService from '../../../../../services/CartService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import LeftMenuComponent from '../../menu/LeftMenuComponent';
import moment from 'moment';
import Swal from 'sweetalert2';

class CartContentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            carts: []
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


    deleteAccountClicked = (cartId, cartName) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want delete ${cartName} ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes.'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Account has been deleted.',
                    'success'
                )
                CartService.deleteCartService(cartId)
                    .then(response => {
                        this.retrieveAllCartService();
                    })
            }
        })
    }

    
    mappingDataAllCarts = () => this.state.carts.map((item, key) => (
        <tr key={item.cartId}>
            <th scope="row">{item.cartId}</th>
            <td>
            {item.cartName}
            </td>
            <td>{moment(item.cartDate).format('YYYY-MM-DD')}</td>
            <td>  {item.cartStatus.toString()} </td>
            <td>
                &nbsp;
                <button className="btn btn-danger"
                    onClick={() => this.deleteAccountClicked(item.cartId, item.cartName)} style={{ width: 100 }} > Delete </button>
            </td>
           
        </tr>
    ))

    render() {
        return (
            <div className="contentPage">
                <div id="wrapper">
                    <LeftMenuComponent/>
                    <div id="content-wrapper bg-white" className="d-flex flex-column" style={{width:1122}}>
                        <div id="content">
                            <HeaderHompageComponent />
                            <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="mx-auto">Cart</h1>
                                </div>
                                <div className="d-flex bd-highlight">
                                    <div className="p-2 w-100 bd-highlight">
                                        <table className="table table-striped table_management mx-auto">
                                            <thead className="table-info">
                                                <tr>
                                                    <th scope="col">Cart ID</th>
                                                    <th scope="col">Cart name</th>
                                                    <th scope="col">Cart date</th>
                                                    <th scope="col">Status</th>
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
            </div>
        );
    }
}

export default CartContentComponent;