import React, { Component } from 'react';
class UpdateAccountComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {


        }
    }
    checkStatusFormUpdateAccount = () => {
        if (this.props.statusShowFormUpdateAccount === true) {
            return (
                <form>
                    <div className="card text-left mt-2">
                        <div className="card bg-warning">
                            <div className="card-header text-center">Update</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)}
                                        type="text" name="name" className="form-control" placeholder="ID" readOnly/>
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)}
                                        type="text" name="tel" className="form-control" placeholder="Username" readOnly/>
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)}
                                        type="text" name="tel" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)}
                                        type="text" name="tel" className="form-control" placeholder="Status" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)}
                                        type="text" name="tel" className="form-control" placeholder="Created_date" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.isChange(event)}
                                        className="custom-select" name="permission" required="permission">
                                        <option value>Authority</option>
                                        <option value={1}> Admin </option>
                                        <option value={2}> Client </option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="button" className="btn btn-block btn-danger"
                                        value="Create"
                                        onClick={() => { this.saveButton() }} />
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
                 {this.checkStatusFormUpdateAccount()}
            </div>
        );
    }
}

export default UpdateAccountComponent;