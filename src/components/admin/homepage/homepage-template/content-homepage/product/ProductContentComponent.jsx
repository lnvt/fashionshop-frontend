import React, { Component } from 'react';
import ProductService from '../../../../../services/ProductService';
import ListProductService from '../../../../../services/ListProductService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import { Link } from 'react-router-dom';

class ProductContentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listproduct: [],
            products: [],
            product: {},
        }
    }

    componentDidMount = () => {
        this.retrieveAllListProduct();
        this.retrieveAllProduct();
    }

    retrieveAllListProduct = () => {
        ListProductService.retrieveAllListProductService()
            .then(response => {
                this.setState({
                    listproduct: response.data
                })
            })
    }

    retrieveAllProduct = () => {
        ProductService.retrieveAllProductService()
            .then(response => {
                this.setState({
                    products: response.data
                })
            })
    }

    mappingDataAllProducts = () => this.state.products.map((item, key) => (
        <tr key={item.productId}>
            <th scope="row">{item.productId}</th>
            <td>{item.productName}</td>
            <td>{item.productCost}</td>
            <td>
                <input id="number" type="number" defaultValue={item.productQuantity}/>
            </td>
            <td>{item.productStatus}</td>
            <td>{item.fkImageProduct}</td>
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
                            <h1>Product</h1>
                        </div>
                        <div className="d-flex bd-highlight">
                            <div className="p-2 w-100 bd-highlight">
                                <table className="table table-hover table_management ">
                                    <thead className="table-info">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Cost</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Feature</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.mappingDataAllProducts()}
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

export default ProductContentComponent;