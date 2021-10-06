import React, { Component } from 'react';
import MenuHeaderTopComponent from '../menu-header-top/MenuHeaderTopComponent';
import FooterComponent from '../footer/FooterComponent';

class DetailProductComponent extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <div className="header">
                        <MenuHeaderTopComponent />
                    </div>
                    <div className="content_top mx-auto">
                        <div className="back-links ">
                            <a href="/daisyhouse">Home</a> &gt;&gt;&gt;&gt; <a href="/#">Detail Product</a>
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
                                                <ul className="pagination">
                                                    <li><a href="/#"><img src="images/thumbnailslide-1.jpg" alt=" " /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="desc span_3_of_2">
                                    <h2>NAME PRODUCT</h2>
                                    <p> DESCRIPTION PRODUCT</p>
                                    <div className="price">
                                        <p>Price: <span>0.00 VNĐ</span></p>
                                    </div>
                                </div>
                                <div className="clear" />
                            </div>
                            <div className="product_desc">
                                <div id="horizontalTab">
                                    <div className="resp-tabs-container">
                                        <div className="product-desc">
                                            <p> Mô tả sản phẩm</p>
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
                                <li><a href="/#">Mobile Phones</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer">
                        <FooterComponent/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailProductComponent;