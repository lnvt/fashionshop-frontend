import React, { Component } from 'react';
import ContentHomepageComponent from '../content-homepage/account/ContentHomepageComponent';
import LeftMenuComponent from '../menu/LeftMenuComponent';

class HomepageComponent extends Component {

  render() {
    return (
      <div>
        <div id="wrapper">
          <LeftMenuComponent />
          <ContentHomepageComponent />
        </div>
      </div>
    );
  }
}

export default HomepageComponent;