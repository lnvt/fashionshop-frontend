import React, { Component } from 'react';
import './ErrorStyle.css';

class ErrorPageComponent extends Component {
    render() {
        return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>Oops, The Page you are looking for can't be found!</h2>
                    <a href="/daisyhouse" className="mt-2"><span className="" />Daisy House <i className="bi bi-house-door-fill"></i> </a> 
                </div>
            </div>
        );
    }
}

export default ErrorPageComponent;