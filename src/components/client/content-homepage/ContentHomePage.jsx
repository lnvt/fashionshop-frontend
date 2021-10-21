import React, { Component } from 'react';
import ProductService from '../../services/ProductService';
import ListProductService from '../../services/ListProductService';
import { Link } from 'react-router-dom';
import PaymentComponent from '../payment/PaymentComponent';

class ContentHomePage extends Component {


    constructor(props) {
        super(props)
        this.state = {
            listProducts: [],
            products: [],
            listCartProductDatas: [],
            product: {}
        }
    }

    componentDidMount() {
        this.retrieveAllListProduct();
        this.retrieveAllProduct();
    }

    retrieveAllListProduct = () => {
        ListProductService.retrieveAllListProductService()
            .then(response => {
                this.setState({
                    listProducts: response.data
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

    // Cart
    AddProductIntoCart(productId){

        ProductService.retrieveProductDetailService(productId)
        .then(response => {
            this.setState({
                product: response.data
            })
        })
        var itemProducts = this.state.listCartProductDatas.concat(this.state.product);
        this.setState({
            listCartProductDatas: itemProducts
        })
        this.props.getProductsIntoCart(this.state.listCartProductDatas);
    }

    mappingProduct = (listProductId) => this.state.products.map((item, key) => {
        if (listProductId === item.fkListProduct && key < 7) {
            return (
                    <div className="grid_1_of_4 images_1_of_4">
                        <Link to = {{
                            pathname: `/detail/${item.productId}`
                        }}>
                            <img src={require(`../../${item.fkImageProduct}`).default} style={{ width: 100 }} alt="" />
                        </Link>
                        
                        <h2> {item.productName} </h2>
                        <div className="price-details">
                            <div className="price-number">
                                <p><span className="rupees">{item.productCost}</span></p>
                            </div>
                            <div className="">
                                <h4><button className="btn btn-info"
                                            onClick = {() => this.AddProductIntoCart(item.productId)}>Add to Cart</button></h4>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>

            )
        }
        
    })

    mappingList = () => this.state.listProducts.map((itemList, key) => (
        <div className="content mb-2">
            <div className="content_top mt-4">
                <div className="heading">
                    {itemList.listProductName}
                </div>
                <div className="see" style={{ marginBottom: 10 }}>
                    <Link to={{
                        pathname: `/listproduct/${itemList.listProductId}`
                    }}>
                        <button className="btn btn-outline-info">See all Products</button>
                    </Link>
                </div>
                <div className="clear" />
            </div>
            <div className="section group">
            {this.mappingProduct(itemList.listProductId)}
                    </div>
        </div>
    ))

    render() {
        return (
            <div>
                {this.mappingList()}
            </div>
        );
    }
}

export default ContentHomePage;