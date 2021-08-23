import React, { Component } from 'react';

class LeftMenuComponent extends Component {

  LeftMenuOut = () =>{
    console.log("Menu out!");
  }
  render() {
    return (
      <div>
        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* Sidebar - Brand */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
            </div>
            <div className="sidebar-brand-text mx-3">Daisy House</div>
          </a>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span></a>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">
            Interface
          </div>
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <i className="fas fa-fw fa-cog" />
              <span>Components</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="buttons.html">Buttons</a>
                <a className="collapse-item" href="cards.html">Cards</a>
              </div>
            </div>
          </li>
          {/* Nav Item - Utilities Collapse Menu */}

          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">
            Addons
          </div>
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder" />
              <span>Pages</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Login Screens:</h6>
                <a className="collapse-item" href="login.html">Login</a>
                <a className="collapse-item" href="register.html">Register</a>
                <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                <div className="collapse-divider" />
                <h6 className="collapse-header">Other Pages:</h6>
                <a className="collapse-item" href="404.html">404 Page</a>
                <a className="collapse-item" href="blank.html">Blank Page</a>
              </div>
            </div>
          </li>
          {/* Sidebar Message */}
          <div className="btn btn-danger" 
                style={{ width: 50, alignSelf:"center"}}
                onClick = {this.LeftMenuOut}>
            <i class="bi bi-arrow-left-square-fill"></i>
          </div>
        </ul>
        {/* End of Sidebar */}

      </div>
    );
  }
}

export default LeftMenuComponent;