import React, { Component } from 'react';

class HomepageClient extends Component {
    render() {
        return (
            <div>
                <div className="wrap">
                    <div className="header">
                        <div className="headertop_desc">
                            <div className="call">
                                <p><span>Need help?</span> call us <span className="number">1-22-3456789</span></p>
                            </div>
                            <div className="account_desc">
                                <ul>
                                    <li><a href="#">Register</a></li>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Delivery</a></li>
                                    <li><a href="#">Checkout</a></li>
                                    <li><a href="#">My Account</a></li>
                                </ul>
                            </div>
                            <div className="clear" />
                        </div>
                        <div className="header_top">
                            <div className="logo">
                                <a href="index.html"><img src="images/logo.png" alt="" /></a>
                            </div>
                            <div className="cart">
                                <p>Welcome to our Online Store! <span>Cart:</span></p><div id="dd" className="wrapper-dropdown-2"> 0 item(s) - $0.00
                                    <ul className="dropdown">
                                        <li>you have no items in your Shopping cart</li>
                                    </ul></div><p />
                            </div>
                            <div className="clear" />
                        </div>
                        <div className="header_bottom">
                            <div className="menu">
                                <ul>
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="delivery.html">Delivery</a></li>
                                    <li><a href="news.html">News</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <div className="clear" />
                                </ul>
                            </div>
                            <div className="search_box">
                                <form>
                                    <input type="text" defaultValue="Search" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}" /><input type="submit" defaultValue />
                                </form>
                            </div>
                            <div className="clear" />
                        </div>
                        <div className="header_slide">
                            <div className="header_bottom_left">
                                <div className="categories">
                                    <ul>
                                        <h3>Categories</h3>
                                        <li><a href="#">Mobile Phones</a></li>
                                        <li><a href="#">Desktop</a></li>
                                        <li><a href="#">Laptop</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Software</a></li>
                                        <li><a href="#">Sports &amp; Fitness</a></li>
                                        <li><a href="#">Footwear</a></li>
                                        <li><a href="#">Jewellery</a></li>
                                        <li><a href="#">Clothing</a></li>
                                        <li><a href="#">Home Decor &amp; Kitchen</a></li>
                                        <li><a href="#">Beauty &amp; Healthcare</a></li>
                                        <li><a href="#">Toys, Kids &amp; Babies</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header_bottom_right">
                                <div className="slider">
                                    <div id="slider">
                                        <div id="mover">
                                            <div id="slide-1" className="slide">
                                                <div className="slider-img">
                                                    <a href="preview.html"><img src="images/slide-1-image.png" alt="learn more" /></a>
                                                </div>
                                                <div className="slider-text">
                                                    <h1>Clearance<br /><span>SALE</span></h1>
                                                    <h2>UPTo 20% OFF</h2>
                                                    <div className="features_list">
                                                        <h4>Get to Know More About Our Memorable Services Lorem Ipsum is simply dummy text</h4>
                                                    </div>
                                                    <a href="preview.html" className="button">Shop Now</a>
                                                </div>
                                                <div className="clear" />
                                            </div>
                                            <div className="slide">
                                                <div className="slider-text">
                                                    <h1>Clearance<br /><span>SALE</span></h1>
                                                    <h2>UPTo 40% OFF</h2>
                                                    <div className="features_list">
                                                        <h4>Get to Know More About Our Memorable Services</h4>
                                                    </div>
                                                    <a href="preview.html" className="button">Shop Now</a>
                                                </div>
                                                <div className="slider-img">
                                                    <a href="preview.html"><img src="images/slide-3-image.jpg" alt="learn more" /></a>
                                                </div>
                                                <div className="clear" />
                                            </div>
                                            <div className="slide">
                                                <div className="slider-img">
                                                    <a href="preview.html"><img src="images/slide-2-image.jpg" alt="learn more" /></a>
                                                </div>
                                                <div className="slider-text">
                                                    <h1>Clearance<br /><span>SALE</span></h1>
                                                    <h2>UPTo 10% OFF</h2>
                                                    <div className="features_list">
                                                        <h4>Get to Know More About Our Memorable Services Lorem Ipsum is simply dummy text</h4>
                                                    </div>
                                                    <a href="preview.html" className="button">Shop Now</a>
                                                </div>
                                                <div className="clear" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear" />
                                </div>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                    <div className="main">
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
                                    <a href="preview.html"><img src="images/feature-pic1.jpg" alt="" /></a>
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
                                <div className="grid_1_of_4 images_1_of_4">
                                    <a href="preview.html"><img src="images/feature-pic2.jpg" alt="" /></a>
                                    <h2>Lorem Ipsum is simply </h2>
                                    <div className="price-details">
                                        <div className="price-number">
                                            <p><span className="rupees">$899.75</span></p>
                                        </div>
                                        <div className="add-cart">
                                            <h4><a href="preview.html">Add to Cart</a></h4>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                                <div className="grid_1_of_4 images_1_of_4">
                                    <a href="preview.html"><img src="images/feature-pic3.jpg" alt="" /></a>
                                    <h2>Lorem Ipsum is simply </h2>
                                    <div className="price-details">
                                        <div className="price-number">
                                            <p><span className="rupees">$599.00</span></p>
                                        </div>
                                        <div className="add-cart">
                                            <h4><a href="preview.html">Add to Cart</a></h4>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                                <div className="grid_1_of_4 images_1_of_4">
                                    <a href="preview.html"><img src="images/feature-pic4.jpg" alt="" /></a>
                                    <h2>Lorem Ipsum is simply </h2>
                                    <div className="price-details">
                                        <div className="price-number">
                                            <p><span className="rupees">$679.87</span></p>
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
                                <div className="grid_1_of_4 images_1_of_4">
                                    <a href="preview.html"><img src="images/new-pic2.jpg" alt="" /></a>
                                    <h2>Lorem Ipsum is simply </h2>
                                    <div className="price-details">
                                        <div className="price-number">
                                            <p><span className="rupees">$599.99</span></p>
                                        </div>
                                        <div className="add-cart">
                                            <h4><a href="preview.html">Add to Cart</a></h4>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                                <div className="grid_1_of_4 images_1_of_4">
                                    <a href="preview.html"><img src="images/new-pic4.jpg" alt="" /></a>
                                    <h2>Lorem Ipsum is simply </h2>
                                    <div className="price-details">
                                        <div className="price-number">
                                            <p><span className="rupees">$799.99</span></p>
                                        </div>
                                        <div className="add-cart">
                                            <h4><a href="preview.html">Add to Cart</a></h4>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                                <div className="grid_1_of_4 images_1_of_4">
                                    <a href="preview.html"><img src="images/new-pic3.jpg" alt="" /></a>
                                    <h2>Lorem Ipsum is simply </h2>
                                    <div className="price-details">
                                        <div className="price-number">
                                            <p><span className="rupees">$899.99</span></p>
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
                </div>
                <div className="footer">
                    <div className="wrap">
                        <div className="section group">
                            <div className="col_1_of_4 span_1_of_4">
                                <h4>Information</h4>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="contact.html">Customer Service</a></li>
                                    <li><a href="#">Advanced Search</a></li>
                                    <li><a href="delivery.html">Orders and Returns</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col_1_of_4 span_1_of_4">
                                <h4>Why buy from us</h4>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="contact.html">Customer Service</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="contact.html">Site Map</a></li>
                                    <li><a href="#">Search Terms</a></li>
                                </ul>
                            </div>
                            <div className="col_1_of_4 span_1_of_4">
                                <h4>My account</h4>
                                <ul>
                                    <li><a href="contact.html">Sign In</a></li>
                                    <li><a href="index.html">View Cart</a></li>
                                    <li><a href="#">My Wishlist</a></li>
                                    <li><a href="#">Track My Order</a></li>
                                    <li><a href="contact.html">Help</a></li>
                                </ul>
                            </div>
                            <div className="col_1_of_4 span_1_of_4">
                                <h4>Contact</h4>
                                <ul>
                                    <li><span>+91-123-456789</span></li>
                                    <li><span>+00-123-000000</span></li>
                                </ul>
                                <div className="social-icons">
                                    <h4>Follow Us</h4>
                                    <ul>
                                        <li><a href="#" target="_blank"><img src="images/facebook.png" alt="" /></a></li>
                                        <li><a href="#" target="_blank"><img src="images/twitter.png" alt="" /></a></li>
                                        <li><a href="#" target="_blank"><img src="images/skype.png" alt="" /> </a></li>
                                        <li><a href="#" target="_blank"> <img src="images/dribbble.png" alt="" /></a></li>
                                        <li><a href="#" target="_blank"> <img src="images/linkedin.png" alt="" /></a></li>
                                        <div className="clear" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy_right">
                        <p>© 2013 home_shoppe. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
                    </div>
                </div>
                <a href="#" id="toTop"><span id="toTopHover"> </span></a>
            </div>
        );
    }
}

export default HomepageClient;