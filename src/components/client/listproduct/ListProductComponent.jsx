import React, { Component } from 'react';
import MenuHeaderTopComponent from '../menu-header-top/MenuHeaderTopComponent';
import MenuHeaderBottomComponent from '../menu-header-bottom/MenuHeaderBottomComponent';
import FooterComponent from '../footer/FooterComponent';
import ProductService from '../../services/ProductService';
import ListProductService from '../../services/ListProductService';
import { Link } from 'react-router-dom';
import './ListProductStyle.css';

class ListProductComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            listProduct: {},
        }
    }

    componentDidMount() {
        this.retrieveAllListProduct();
        this.retrieveAllProduct();
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

    mappingProductFollowList = () => this.state.products.map((item, key) => {
        if (parseInt(this.props.match.params.id) === item.fkListProduct) {
            return (
                    <div className="grid_1_of_4 images_1_of_4 listgrid">
                        <a href="preview.html">
                            <Link to ={{
                                pathname: `/detail/${item.productId}`
                            }}>
                                <img src="" alt="" />
                            </Link>
                        </a>
                        <h2> </h2>
                        <div className="price-details">
                            <div className="price-number">
                                <p><span className="rupees">{item.productName}</span></p>
                            </div>
                            <div className="add-cart">
                                <h4><a href="detail/{item}">Add to Cart</a></h4>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
            )
        }
    })

    render() {
        return (

            <div>
                <div className="">
                    <div className="header">
                        <MenuHeaderTopComponent />
                        <div className="header_bottom">
                            <MenuHeaderBottomComponent />
                        </div>
                    </div>
                    <div className="main wrap">
                        <div>
                            <h1>List Product - {this.props.match.params.id}</h1>
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