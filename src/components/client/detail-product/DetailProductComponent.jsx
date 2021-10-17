import React, { Component } from 'react';
import MenuHeaderTopComponent from '../menu-header-top/MenuHeaderTopComponent';
import FooterComponent from '../footer/FooterComponent';
import ProductService from '../../services/ProductService';
import ListProductService from '../../services/ListProductService';

class DetailProductComponent extends Component {



    constructor(props) {
        super(props)
        this.state = {
            product: {},
            listProduct:[],
        }
    }


    componentDidMount() {
        this.retrieveAllProduct();
        this.retrieveAllListProduct();
        
    }

    retrieveAllProduct = (id) => {
        ProductService.retrieveProductDetailService(this.props.match.params.id)
            .then(response => {
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
        <a href= "#">
            {item.listProductName}    
        </a>
    ))

    mappingWebListProduct = () => this.state.listProduct.map((item, key) => {
        if(this.state.product.fkListProduct === item.listProductId) {
            return (
                <div> <a href = "/#"> Home </a> - <a href = "/#"> {item.listProductName} </a> </div>
            )
        }
    })    
        
    render() {
        console.log(this.state.product)
        console.log(this.state.listProduct)
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
                                                    <a href="/#"><img src="images/productslide-1.jpg" alt=" " /></a>
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
                            <div className="content_bottom">
                                <div className="heading">
                                    <h3>Related Products</h3>
                                </div>
                                <div className="see">
                                    <p><a href="/#">See all Products</a></p>
                                </div>
                                <div className="clear" />
                            </div>
                            <div className="section group">
                                <div className="grid_1_of_4 images_1_of_4">
                                    <a href="/#"><img src="images/new-pic1.jpg" alt="" /></a>
                                    <div className="price" style={{ border: 'none' }}>
                                        <div className="add-cart" style={{ float: 'none' }}>
                                            <h4><a href="/#">Add to Cart</a></h4>
                                        </div>
                                        <div className="clear" />
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