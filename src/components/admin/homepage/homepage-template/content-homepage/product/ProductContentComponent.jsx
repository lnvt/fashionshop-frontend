import React, { Component } from 'react';
import ProductService from '../../../../../services/ProductService';
import ListProductService from '../../../../../services/ListProductService';
import ImageService from '../../../../../services/ImageService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import { Link } from 'react-router-dom';
import LeftMenuComponent from '../../menu/LeftMenuComponent';
import "react-pagination-library/build/css/index.css";

class ProductContentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listproduct: [],
            products: [],
            images: [],
            currentPage: 1
        }
    }

    componentDidMount = () => {
        this.retrieveAllListProduct();
        this.retrieveAllProduct();
        this.retrieveAllImage();
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

    retrieveAllImage = () => {
        ImageService.retrieveAllImageService()
            .then(response => {
                this.setState({
                    images: response.data
                })
            })
    }

    mappingDataAllProducts = () => this.state.products.map((item, key) => (
        <tr key={item.productId}>
            <td>{item.productName}</td>
            <td>{item.productCost} VNĐ</td>
            <td>
                <img src={require(`../../../../../${item.fkImageProduct}`).default} style={{ width: 100 }} alt="" />
            </td>
            <td>
                <Link to={{
                    pathname: `/detail/product/${item.productId}`
                }}>
                    <button className="btn btn-warning" style={{ width: 100 }}> Update </button>
                </Link>
                &nbsp;
            </td>
        </tr>
    ))

    render() {

        return (
            <div className="contentPage">
                <div id="wrapper">
                    <LeftMenuComponent />
                    <div id="content-wrapper bg-white" className="d-flex flex-column">
                        <div id="content">
                            <HeaderHompageComponent />
                            <div className="container-fluid" style={{ width: 1122 }}>
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="mx-auto">Product</h1>
                                </div>
                                <div className="d-flex bd-highlight">
                                    <div className="p-2 w-100 bd-highlight">
                                        <table className="table table-striped table_management ">
                                            <thead className="table-info">
                                                <tr>
                                                    <th scope="col" style={{ width: 350 }}>Name</th>
                                                    <th scope="col">Cost</th>
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
            </div>
        );
    }
}

export default ProductContentComponent;