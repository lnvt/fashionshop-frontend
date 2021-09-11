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
        {/* Sidebar */}
        <ul ref = "toggle" className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* Sidebar - Brand */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/#">
            <div className="sidebar-brand-icon rotate-n-15">
            </div>
            <div className="sidebar-brand-text mx-3">Daisy House</div>
          </a>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          
          <li className="nav-item">
            <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder" />
              <span>Admin</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Account</h6>
                <a className="collapse-item" href="/#">Management</a>
                <a className="collapse-item" href="/#">Register</a>
                <a className="collapse-item" href="/#">Forgot Password</a>
              </div>
            </div>
          </li>
          {/* Sidebar Message */}
        </ul>
        {/* End of Sidebar */}
        <div className="btn btn-danger btn-leftmenu fixed-bottom" 
                onClick = {this.handleToggleMenu}>
            <i className="bi bi-list"></i>
          </div>
      </div>
    );
  }
}

export default LeftMenuComponent;