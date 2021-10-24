import React, { Component } from 'react';
import MenuHeaderTopComponent from '../menu-header-top/MenuHeaderTopComponent';
import MenuHeaderBottomComponent from '../menu-header-bottom/MenuHeaderBottomComponent';
import FooterComponent from '../footer/FooterComponent';
import ProductService from '../../services/ProductService';
import ListProductService from '../../services/ListProductService';
import ImageService from '../../services/ImageService';
import { Link } from 'react-router-dom';
import './ListProductStyle.css';
import PaymentComponent from '../payment/PaymentComponent';



class ListProductComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            listProduct: {},
            imageProducts: [],
            listCartProducts: [],
        }
    }

    componentDidMount() {
        this.retrieveAllListProduct();
        this.retrieveAllProduct();
        this.retrieveAllImage();
    }

    retrieveAllListProduct() {
        ListProductService.retrieveListProductService(this.props.match.params.id)
            .then(response => {
                this.setState({
                    listProduct: response.data
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
                    imageProducts: response.data
                })
            }) 
    }

    // Cart

    addProductIntoCart = (productId,productName, productCost, productImage) => {
        var listCartProducts = [];
        var productCart = {};
        productCart.productId = productId;
        productCart.productName = productName;
        productCart.productCost = productCost;
        productCart.productImage = productImage;
        listCartProducts.push(productCart);

        this.setState({
            listCartProducts : listCartProducts
        })
    }

    mappingProductFollowList = () => this.state.products.map((itemProduct, keyProduct) => {
            if (parseInt(this.props.match.params.id) === itemProduct.fkListProduct){
                return (
                        <div className="grid_1_of_4 images_1_of_4 listgrid">
                            <a href="preview.html">
                                <Link to ={{
                                    pathname: `/detail/${itemProduct.productId}`
                                }}>
                                    <img src={require(`../../${itemProduct.fkImageProduct}`).default} style={{ width: 100 }} alt="" />
                                  
                                </Link>
                            </a>
                            <h2> </h2>
                            <div className="price-details">
                                <div className="price-number">
                                    <p><span className="rupees">{itemProduct.productName}</span></p>
                                    <p><span className="rupees">{itemProduct.productCost} VND</span></p>
                                </div>
                                <div className="add-cart">
                                    <h4><button className = "btn btn-primary" style={{width:100}} 
                                        onClick = {() => this.addProductIntoCart(itemProduct.productId, itemProduct.productName, itemProduct.productCost, itemProduct.fkImageProduct)}> 
                                            Add to Cart 
                                    </button></h4>
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                )
            }
            return null;
        })

    getProductItems = () => {
        return <PaymentComponent 
                 getProductItems = {this.state.listCartProducts}/>
    }

    render() {
        return (
            <div>
                <div className="">
                    <div className="header">
                        <MenuHeaderTopComponent 
                            cartProductItems = {this.state.listCartProducts}/>
                        <div className="header_bottom">
                            <MenuHeaderBottomComponent />
                        </div>
                    </div>
                    <div className="main wrap">
                        <div>
                            <div className="section group">
                                    {this.mappingProductFollowList()}
                                </div>
                            </div>
                    </div>
                </div>
                <div className="footer wrap">
                    <FooterComponent />
                </div>
                <a href="/#" id="toTop"><span id="toTopHover"> </span></a>
            </div>

        );
    }
}

export default ListProductComponent;