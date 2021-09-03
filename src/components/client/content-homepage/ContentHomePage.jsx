import React, { Component } from 'react';

class ContentHomePage extends Component {
    render() {
        return (
            <div>
                <div className="content">
                            <div className="content_top">
                                <div className="heading">
                                    <h3>New Products</h3>
                                </div>
                                <div className="see">
                                    <p><a href="#">See all Products</a></p>
                                </div>
                                <div className="clear" />
                            </div>
                            <div className="section group">
                                <div className="grid_1_of_4 images_1_of_4">
                                    <a href="preview.html">
                                        {/* <img src={ImagesShoes} alt="" /> */}
                                        <img src="images/feature-pic2.jpg" alt="" />
                                    </a>
                                    <h2>Lorem Ipsum is simply </h2>
                                    <div className="price-details">
                                        <div className="price-number">
                                            <p><span className="rupees">$620.87</span></p>
                                        </div>
                                        <div className="add-cart">
                                            <h4><a href="preview.html">Add to Cart</a></h4>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                            <div className="content_bottom">
                                <div className="heading">
                                    <h3>Feature Products</h3>
                                </div>
                                <div className="see">
                                    <p><a href="#">See all Products</a></p>
                                </div>
                                <div className="clear" />
                            </div>
                            <div className="section group">
                                <div className="grid_1_of_4 images_1_of_4">
                                    <a href="preview.html"><img src="images/new-pic1.jpg" alt="" /></a>
                                    <h2>Lorem Ipsum is simply </h2>
                                    <div className="price-details">
                                        <div className="price-number">
                                            <p><span className="rupees">$849.99</span></p>
                                        </div>
                                        <div className="add-cart">
                                            <h4><a href="preview.html">Add to Cart</a></h4>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        );
    }
}

export default ContentHomePage;