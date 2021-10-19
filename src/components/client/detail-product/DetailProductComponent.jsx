import React, { Component } from 'react';
import MenuHeaderTopComponent from '../menu-header-top/MenuHeaderTopComponent';
import FooterComponent from '../footer/FooterComponent';
import ProductService from '../../services/ProductService';
import ListProductService from '../../services/ListProductService';
import ImageService from '../../services/ImageService';
import { Link } from 'react-router-dom';

class DetailProductComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: {},
            listProduct:[],
            imageProduct:{}
        }
    }

    componentDidMount() {
        this.retrieveAllProduct();
        this.retrieveAllListProduct();
        this.retrieveAllImage();
    }

    
    retrieveAllImage = () => {
        ImageService.retrieveImageService(this.props.match.params.id)
            .then(response => {
                console.log(response)
                this.setState({
                    imageProducts: response.data
                })
            }) 
    }

    retrieveAllProduct = (id) => {
        ProductService.retrieveProductDetailService(this.props.match.params.id)
            .then(response => {
                
                console.log(response.data)
                this.setState({
                    product: response.data
                })
            })
    }

    retrieveAllListProduct() {
        ListProductService.retrieveAllListProductService()
            .then(response =>{
                this.setState({
                    listProduct: response.data
                })
            })
    }

    mappingAllListProduct = () => this.state.listProduct.map((item,key) => (
        <ul>
            <li>
            <Link to={{
                    pathname: `/listproduct/${item.listProductId}`
                }}> {item.listProductName} </Link>
            </li>
        </ul>
    ))

    mappingWebListProduct = () => this.state.listProduct.map((item, key) => {
        if(this.state.product.fkListProduct === item.listProductId) {
            return (
                <div> <a href = "/daisyhouse"> Home </a> - <Link to={{
                    pathname: `/listproduct/${item.listProductId}`
                }}> {item.listProductName} </Link> </div>
            )
        }
    })    
        
    render() {
        console.log(this.state.product.fkImageProduct)
        return (
            <div>
                <div className="">
                    <div className="header">
                        <MenuHeaderTopComponent />
                    </div>
                    <div className="content_top mx-auto">
                        <div className="back-links ">
                           {this.mappingWebListProduct()}
                        </div>
                        <div className="clear" />
                    </div>
                    <div className="section group">
                        <div className="cont-desc span_1_of_2">
                            <div className="product-details">
                                <div className="grid images_3_of_2">
                                    <div id="container">
                                        <div id="products_example">
                                            <div id="products">
                                                <div className="slides_container">
                                                    <a href="/#">
                                                        {/* <img src={require(`../../${this.state.product.fkImageProduct}`).default} style={{ width: 100 }} alt="" /> */}
                                                        <img src={require(`../../imgs_product/SHOES/shoes_22.png`).default} style={{ width: 100 }} alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="desc span_3_of_2">
                                    <h2>{this.state.product.productName}</h2>
                                    <div className="price">
                                        <p>Price: <span>{this.state.product.productCost} VNĐ</span></p>
                                    </div>
                                </div>
                                <div className="clear" />
                            </div>
                            <div className="product_desc">
                                <div id="horizontalTab">
                                    <div className="resp-tabs-container">
                                        <div className="product-desc">
                                            <p> Product Description</p>
                                            {this.state.product.productDescription}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rightsidebar span_3_of_1">
                            <h2>CATEGORIES</h2>
                            <ul className="side-w3ls">
                                {this.mappingAllListProduct()}
                            </ul>
                        </div>
                    </div>
                    <div className="footer">
                        <FooterComponent />
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailProductComponent;