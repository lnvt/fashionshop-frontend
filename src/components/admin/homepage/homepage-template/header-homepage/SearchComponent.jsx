import React, { Component } from 'react';

class SearchComponent extends Component {
    render() {
        return (
            <div>
                 {/* Topbar Search */}
                 <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" 
                                    style = {{width:500}} />
                            <div className="input-group-append mr-2">
                                <button className="btn btn-outline-danger" type="button" style = {{width: 50}}>
                                    <i className="fas fa-search fa-sm" />
                                </button>
                            </div>
                        </div>
                    </form>
            </div>
        );
    }
}

export default SearchComponent;