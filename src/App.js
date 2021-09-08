import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/admin/login/login-template/LoginComponent';
import HomepageComponent from './components/admin/homepage/homepage-template/homepage/HomepageComponent';
import ErrorPageComponent from './components/admin/homepage/homepage-template/errorpage/ErrorPageComponent';
import TodosComponent from './components/admin/homepage/test/TodosComponent';
import LogoutComponent from './components/admin/logout/logout-template/LogoutComponent';
import HomepageClient from './components/client/homepage/HomepageClientComponent';
import DetailProductComponent from './components/client/detail-product/DetailProductComponent';
import UpdateAccountComponent from './components/admin/homepage/homepage-template/content-homepage/UpdateAccountComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/home-page" component={HomepageComponent} />
              <Route path="/information/:name" component={HomepageComponent} />
              <Route path="/todos" component={TodosComponent} />
              <Route path="/log-out" component={LogoutComponent} />
              <Route path="/daisyhouse" component={HomepageClient} />
              <Route path="/account/:id" component={UpdateAccountComponent} />
              <Route path="/daisyhouse/detail/:id" component={DetailProductComponent} />
              <Route component={ErrorPageComponent} />
            </Switch>
          </>
        </Router>
      </div>
    )
  }
}


export default App;
