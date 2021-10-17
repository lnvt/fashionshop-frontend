import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from '../admin/login/login-template/LoginComponent';
import ErrorPageComponent from '../admin/homepage/homepage-template/errorpage/ErrorPageComponent';
import LogoutComponent from '../admin/logout/logout-template/LogoutComponent';
import HomepageClient from '../client/homepage/HomepageClientComponent';
import DetailProductComponent from '../client/detail-product/DetailProductComponent';
import ContactComponent from '../client/contact/ContactComponent';
import OnePageComponent from '../client/about-onepage/OnePageComponent';
import HomepageComponent from '../admin/homepage/homepage-template/homepage/HomepageComponent';
import UpdateAccountComponent from '../admin/homepage/homepage-template/content-homepage/account/UpdateAccountComponent';
import CreateAccountComponent from '../admin/homepage/homepage-template/content-homepage/account/CreateAccountComponent';

import CartContentComponent from '../admin/homepage/homepage-template/content-homepage/cart/CartContentComponent';
import CreateCartComponent from '../admin/homepage/homepage-template/content-homepage/cart/CreateCartComponent';
import UpdateCartComponent from '../admin/homepage/homepage-template/content-homepage/cart/UpdateCartComponent';

import CodeSaleContentComponent from '../admin/homepage/homepage-template/content-homepage/codesale/CodeSaleContentComponent';
import CreateCodeSaleComponent from '../admin/homepage/homepage-template/content-homepage/codesale/CreateCodeSaleComponent';
import UpdateCodeSaleComponent from '../admin/homepage/homepage-template/content-homepage/codesale/UpdateCodeSaleComponent';

import PostContentComponent from '../admin/homepage/homepage-template/content-homepage/post/PostContentComponent';
import CreatePostComponent from '../admin/homepage/homepage-template/content-homepage/post/CreatePostComponent';
import UpdatePostComponent from '../admin/homepage/homepage-template/content-homepage/post/UpdatePostComponent';

import ProductContentComponent from '../admin/homepage/homepage-template/content-homepage/product/ProductContentComponent';
import CreateProductComponent from '../admin/homepage/homepage-template/content-homepage/product/CreateProductComponent';
import UpdateProductComponent from '../admin/homepage/homepage-template/content-homepage/product/UpdateProductComponent';
import ListProductComponent from '../client/listproduct/ListProductComponent';



class RouterURL extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
            <Switch>

              {/* Admin */}
              <Route path="/login" component={LoginComponent} />
              <Route path="/home-page" component={HomepageComponent} />
              <Route path="/account/:id" component={UpdateAccountComponent} />
              <Route path="/create/account" component={CreateAccountComponent} />
              <Route path="/cart" component={CartContentComponent}/> 
              <Route path="/cart/new" component={CreateCartComponent}/> 
              <Route path="/cart/:id" component={UpdateCartComponent}/> 
              <Route path="/codesale" component={CodeSaleContentComponent}/> 
              <Route path="/codesale/new" component={CreateCodeSaleComponent}/> 
              <Route path="/codesale/:id" component={UpdateCodeSaleComponent}/> 
              <Route path="/post" component={PostContentComponent}/> 
              <Route path="/post/new" component={CreatePostComponent}/> 
              <Route path="/post/:id" component={UpdatePostComponent}/> 
              <Route path="/product" component={ProductContentComponent}/> 
              <Route path="/product/new" component={CreateProductComponent}/> 
              <Route path="/product/:id" component={UpdateProductComponent}/> 
              <Route path="/log-out" component={LogoutComponent} />

              {/* Client */}
              <Route path="/listproduct/:id" component={ListProductComponent} />
              <Route path="/" exact component={LoginComponent} />
              <Route path="/information/:name" component={HomepageComponent} />
              <Route path="/daisyhouse" component={HomepageClient} />
              <Route path="/detail/:id" component={DetailProductComponent} />
              <Route path="/contact" component={ContactComponent} />
              <Route path="/about" component={OnePageComponent} />
              <Route component={ErrorPageComponent} />
              


            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default RouterURL;