import React, { Component } from 'react';
import $ from "jquery";
import { findDOMNode } from "react-dom";
import './LeftMenuStyle.css';

class LeftMenuComponent extends Component {

  handleToggleMenu = () => {
    const toggleMenu = findDOMNode(this.refs.toggle);
    $(toggleMenu).slideToggle();
  }

  render() {
    return (
      <div >
        <ul ref="toggle" className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/#">
            <div className="sidebar-brand-icon rotate-n-15"></div>
            <div className="sidebar-brand-text mx-3">Daisy House</div>
          </a>
          <hr className="sidebar-divider my-0" />
          <div className="menuleft">
            <ul>
              <a className="btn btn-danger btn-block mt-2" href="/home-page" role="button">Account</a>
              <a className="btn btn-danger btn-block" href="/cart" role="button">Cart</a>
              <a className="btn btn-danger btn-block" href="/codesale" role="button">Code sale</a>
              <a className="btn btn-danger btn-block" href="/product" role="button">Product</a>
              <a className="btn btn-danger btn-block" href="/post" role="button">Post</a>
            </ul>
          </div>
        </ul>
        <div className="btn btn-danger btn-leftmenu fixed-bottom"
          onClick={this.handleToggleMenu}
          style = {{width:50}}>
          <i className="bi bi-list"></i>
        </div>
      </div>
    );
  }
}

export default LeftMenuComponent;