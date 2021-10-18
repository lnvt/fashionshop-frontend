import React, { Component } from 'react';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import './ContentHomepageStyle.css';
import Swal from 'sweetalert2';
import AccountService from '../../../../../services/AccountService';
import { Link } from 'react-router-dom';
import SearchComponent from '../../header-homepage/SearchComponent';


class ContentHomepageComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            accounts: [],
            message: null,
            showFormAddAccount: false,
            showFormUpdateAccount: false,
            account: {},
        }
    }

    componentDidMount = () => {

        // Services 
        this.retrieveAllAccount();

        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Login Success!',
            showConfirmButton: false,
            timer: 1500
        })
    }

    retrieveAllAccount = () => {
        AccountService.retrieveAllAccountService()
            .then(response => {
                this.setState({
                    accounts: response.data
                })
            })
    }

    deleteAccountClicked = (id, username) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want delete ${username} ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes.'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Account has been deleted.',
                    'success'
                )
                AccountService.deleteAccountService(id)
                    .then(response => {
                        this.retrieveAllAccount();
                    })
            }
        })

    }

    mappingDataAllAccounts = () => this.state.accounts.map((item, key) =>  (
        <tr key={item.accountId}>
            <th scope="row">{item.accountId}</th>
            <td>{item.username}</td>
            <td>{item.password}</td>
            <td>{item.status.toString()}</td>
            <td>{item.createdDate}</td>
            <td>
                <Link to={{
                    pathname: `/account/${item.accountId}`
                }}>
                    <button className="btn btn-warning" style={{ width: 100 }}> Update </button>
                </Link>
                &nbsp;
                <button className="btn btn-danger"
                    onClick={() => this.deleteAccountClicked(item.accountId, item.username)} style={{ width: 100 }}> Delete </button>
            </td>
        </tr>
    ))

    render() {
        return (
            <div className="contentPage">
                <div id="content-wrapper bg-white" className="d-flex flex-column">
                    <div id="content">
                        <HeaderHompageComponent />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="mx-auto">Account Administration</h1>
                            </div>
                            <div className="container">
                                <div class="row">
                                    <div class="col-2">
                                        <a className="btn mt-2 btn-outline-info" href="/create/account" role="button">Create Account</a>
                                    </div>
                                    <div class="col">
                                        <SearchComponent />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex bd-highlight">
                                <div className="p-2 w-100 bd-highlight">
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
                                            {this.mappingDataAllAccounts()}
                                        </tbody>
                                    </table>
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