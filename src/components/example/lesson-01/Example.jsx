import React, { Component } from 'react';

class Example extends Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            name: "Abcxyz",
            number: 0
        }
    }

    // Execute function
    example = () => {
        //console.log("This is example!");

        this.setState({
            number: this.state.number + 1
        });
        console.log(this.state.number);

    }

    layDulieuTuState = (dulieuState) => {
        dulieuState = this.state.trangThai;
    }

    render() {
        return (
            <div>
                <div className="btn-click">
                    <button onClick={this.example}>Click button</button>
                </div>
                <div className="span-state">
                    <span>{this.state.name}</span>
                </div>
                <div className="data-props">
                    <span>{this.props.nameProps}</span>
                </div>
                <div className="data-default-props">
                    <span>{this.props.nameStatus}</span>
                </div>
            </div>
        );
    }
}

Example.defaultProps = {
    status: true,
    nameStatus: 'true'
}

export default Example;