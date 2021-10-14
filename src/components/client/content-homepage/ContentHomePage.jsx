import React, { Component } from 'react';
import bags1 from '../../imgs_product/BAGS/bags_1.png';


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
                                        <button className = "btn btn-outline-info">See all Products</button>
                                </div>
                                <div className="clear" />
                            </div>
                            <div className="section group">
                                <div className="grid_1_of_4 images_1_of_4">
                                    <a href="preview.html">
                                        <img src={bags1} alt="" />
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
                        </div>
            </div>
        );
    }
}

export default ContentHomePage;