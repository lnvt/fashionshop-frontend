import React, { Component } from 'react';

class AddAccountComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
            password: "",
            status: "",
            created_date: "",
        }
    }
    

    isChange = (event) => { 
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    checkStatusFormAddAccount = () => {
        if (this.props.statusShowFormAddAccount === true) {
            return (
                <form>
                    <div className="card text-left mt-2">
                        <div className="card bg-info">
                            <div className="card-header text-center">Create account</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)}
                                        type="text" name="id" className="form-control" placeholder="ID"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)}
                                        type="text" name="username" className="form-control" placeholder="Username"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)}
                                        type="text" name="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.isChange(event)}
                                        className="custom-select" name="status" required="permission" placeholder="Status" >
                                        <option value= "true" > true </option>
                                        <option value= "false" > false </option>
                                    </select>
                                </div>
                                <div className="form-group">
                                <input onChange={(event) => this.isChange(event)}
                                        type="date" name="created_date" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-danger"
                                        value="Create"
                                        onClick={(id, username, password, status, created_date) => 
                                                   this.props.addNewAccount(this.state.id, this.state.username, this.state.password, this.state.status, this.state.created_date)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )
        }
    }

    render() {
        return (
            <div className="">
                {this.checkStatusFormAddAccount()}
            </div>
        );
    }
}

export default AddAccountComponent;