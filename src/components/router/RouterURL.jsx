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

import CodeSaleContentComponent from '../admin/homepage/homepage-template/content-homepage/codesale/CodeSaleContentComponent';

import PostContentComponent from '../admin/homepage/homepage-template/content-homepage/post/PostContentComponent';
import CreatePostComponent from '../admin/homepage/homepage-template/content-homepage/post/CreatePostComponent';
import UpdatePostComponent from '../admin/homepage/homepage-template/content-homepage/post/UpdatePostComponent';

import ProductContentComponent from '../admin/homepage/homepage-template/content-homepage/product/ProductContentComponent';
import UpdateProductComponent from '../admin/homepage/homepage-template/content-homepage/product/UpdateProductComponent';
import ListProductComponent from '../client/listproduct/ListProductComponent';
import PaymentComponent from '../client/payment/PaymentComponent';



class RouterURL extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
            <Switch>
              
              {/* Admin */}
              <Route path="/detail/product/:id" component={UpdateProductComponent}/> 
              <Route path="/login" component={LoginComponent} />
              <Route path="/home-page" component={HomepageComponent} />
              <Route path="/account/:id" component={UpdateAccountComponent} />
              <Route path="/create/account" component={CreateAccountComponent} />
              <Route path="/cart" component={CartContentComponent}/>
              <Route path="/codesale" component={CodeSaleContentComponent}/> 
              <Route path="/post" component={PostContentComponent}/> 
              <Route path="/post/new" component={CreatePostComponent}/> 
              <Route path="/post/:id" component={UpdatePostComponent}/> 
              <Route path="/product" component={ProductContentComponent}/>
              <Route path="/log-out" component={LogoutComponent} />

              {/* Client */}
              <Route path="/payment" component={PaymentComponent} />
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