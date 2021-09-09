import React, { Component } from 'react';
import FooterHomepageComponent from '../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../header-homepage/HeaderHompageComponent';
import './ContentHomepageStyle.css';
import AdminServices from '../../../services/AdminServices';
import Swal from 'sweetalert2'

class ContentHomepageComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            account: [],
            message: null
        }
    }

    componentDidMount = () => {
        this.refreshAccount();
    }

    componentWillMount = () => {
        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Login Success!',
            showConfirmButton: false,
            timer: 1500
          })
    }

    refreshAccount = () => {
        AdminServices.retrieveAllAccount()
            .then(response => {
                this.setState({
                    account: response.data
                });
            })
    }

    deleteAccountClicked = (id) => {
        AdminServices.deleteAccountById(id)
            .then(
                response => {
                    this.setState({ message: `Deleted ${id} successfull!` });
                    this.refreshAccount();
                })
    }

    updateAccountClicked = (id) => {
        console.log("Id update: " + id);
    }



    render() {
        return (
            <div className="contentPage">
                <div id="content-wrapper bg-white" className="d-flex flex-column">
                    <div id="content">
                        <HeaderHompageComponent />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1>Account Administration</h1>
                                {this.state.message && <div className="alert alert-success"> {this.state.message} </div>}
                            </div>
                            <div className="btn btn-info mb-2">
                                Create Account
                            </div>
                            <div className="row  d-flex justify-content-center">
                                <table className="table table-hover table_management ">
                                    <thead className="table-info">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">UserName</th>
                                            <th scope="col">Password</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Created date</th>
                                            <th scope="col">Feature</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.account.map(
                                            item => <tr key={item.id}>
                                                <th scope="row">{item.id}</th>
                                                <td>{item.username}</td>
                                                <td>{item.password}</td>
                                                <td>{item.status.toString()}</td>
                                                <td>{item.created_date}</td>
                                                <td>
                                                    <button className="btn btn-warning"
                                                        onClick={() => this.updateAccountClicked(item.id)}>
                                                        Update
                                                    </button>
                                                    &nbsp;
                                                    <button className="btn btn-danger"
                                                        onClick={() => this.deleteAccountClicked(item.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        )}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <FooterHomepageComponent />
                </div>
            </div>
        );
    }
}

export default ContentHomepageComponent;