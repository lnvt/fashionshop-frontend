import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HomepageComponent extends Component {
    
    render() {
        return (
            <div>
                <div> Welcome {this.props.match.params.name} </div>
                <div>
                        You can management todos in <Link to="/todos"> here </Link>
                </div>
            </div>
        );
    }
}

export default HomepageComponent;