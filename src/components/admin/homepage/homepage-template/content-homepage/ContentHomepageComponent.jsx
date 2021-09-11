import React, { Component } from 'react';
import FooterHomepageComponent from '../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../header-homepage/HeaderHompageComponent';
import './ContentHomepageStyle.css';
import AdminServices from '../../../services/AdminServices';
import Swal from 'sweetalert2';
import AddAccountComponent from './AddAccountComponent';
import UpdateAccountComponent from './UpdateAccountComponent';

class ContentHomepageComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            accounts: [],
            message: null,
            showFormAddAccount: false,
            showFormUpdateAccount: false,
            account: {}
        }
    }

    componentDidMount = () => {
        this.refreshAccount();
        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Login Success!',
            showConfirmButton: false,
            timer: 1500
        })
    }

    // componentWillMount = () => {
 
    // }

    refreshAccount = () => {
        AdminServices.retrieveAllAccount()
            .then(response => {
                this.setState({
                    accounts: response.data
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
        this.setState({
            showFormUpdateAccount : !this.state.showFormUpdateAccount,
        })
    }

    mappingDataAccount = () => this.state.accounts.map((item, key) => (
        <tr key={item.id}>
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
    ))

    changeStatusForm = () => {
        this.setState({
            showFormAddAccount : !this.state.showFormAddAccount
        })
    }

    getNewAccountData = (id, username, password, status, created_date) => {
        var item = {};
        item.id = id;
        item.username = username;
        item.password = password;
        item.status = status;
        item.created_date = created_date;

        var items = this.state.accounts;
        items.push(item);
        this.setState({
            accounts: items
        });
        console.log(item)
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
                            </div>
                            <div className="btn btn-info mb-2"
                                onClick = {this.changeStatusForm}>
                                Create Account
                            </div>
                            <div className ="d-flex bd-highlight">
                                <div className ="p-2 w-100 bd-highlight">
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
                                            {this.mappingDataAccount()}
                                        </tbody>
                                    </table>
                                </div>
                                <div className ="p-2 flex-shrink-1 bd-highlight">
                                    <AddAccountComponent
                                        statusShowFormAddAccount = {this.state.showFormAddAccount}
                                        addNewAccount = {(id, username, password, status, created_date) => 
                                                    this.getNewAccountData(id, username, password, status, created_date)}/>
                                    <UpdateAccountComponent
                                        statusShowFormUpdateAccount = {this.state.showFormUpdateAccount}/>
                                </div>
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