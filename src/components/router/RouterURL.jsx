import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from '../admin/login/login-template/LoginComponent';
import HomepageComponent from '../admin/homepage/homepage-template/homepage/HomepageComponent';
import ErrorPageComponent from '../admin/homepage/homepage-template/errorpage/ErrorPageComponent';
import LogoutComponent from '../admin/logout/logout-template/LogoutComponent';
import HomepageClient from '../client/homepage/HomepageClientComponent';
import DetailProductComponent from '../client/detail-product/DetailProductComponent';
import ContactComponent from '../client/contact/ContactComponent';
import OnePageComponent from '../client/about-onepage/OnePageComponent';
import UpdateAccountComponent from '../admin/homepage/homepage-template/content-homepage/Account/UpdateAccountComponent';
import CreateAccountComponent from '../admin/homepage/homepage-template/content-homepage/Account/CreateAccountComponent';

class RouterURL extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
            <Switch>
              <Route path="/account/new" component={CreateAccountComponent} />
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/home-page" component={HomepageComponent} />
              <Route path="/information/:name" component={HomepageComponent} />
              <Route path="/log-out" component={LogoutComponent} />
              <Route path="/daisyhouse" component={HomepageClient} />
              <Route path="/account/:id" component={UpdateAccountComponent} />
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