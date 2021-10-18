import { Form, Formik } from 'formik';
import React, { Component } from 'react';
import AccountService from '../../../../../services/AccountService';
import RoleAccountService from '../../../../../services/RoleAccountService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import moment from 'moment';

class UpdateAccountComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            roleAccounts: [],
            account: {},
            accountId: 0,
            username: "abc",   
            password: "",
            status: false,
            createdDate: moment(new Date()).format('YYYY-MM-DD'),
            fkRoleAccount: 0,
        }
    }


    componentDidMount = () => {
        this.retrieveAccount();
        this.retrieveAllRoleAccount();
    }

    retrieveAccount = () => {
        AccountService.retrieveAccountService(this.props.match.params.id)
            .then(response => {
                this.setState({
                    account: response.data
                })
            })
    }

    retrieveAllRoleAccount = () => {
        RoleAccountService.retrieveAllRoleAccountService()
            .then(response => {
                this.setState({
                    roleAccounts: response.data
                })
            })
    }
    mappingDataAllAccounts = () => this.state.roleAccounts.map((item, key) => (
        <option value={item.roleId}> {item.roleName} </option>
    ))
    
    onUpdateSubmit(values) {
        console.log(values);
    }


    render() {
        let accountId = this.state.account.accountId;
        let username = this.state.account.username;
        let password = this.state.account.password;
        let createdDate = this.state.account.createdDate;
        let status = this.state.account.status;
        let fkRoleAccount = this.state.account.fkRoleAccount;
        return (
            <div>
                <div className="contentPage">
                    <div id="content-wrapper bg-white" className="d-flex flex-column">
                        <div id="content">
                            <HeaderHompageComponent />
                            <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1>Update account</h1>
                                </div>
                                <div className="form-update-account">
                                    <Formik
                                        initialValues={{
                                          accountId, username, password, createdDate, status, fkRoleAccount
                                        }}
                                        onSubmit={this.onUpdateSubmit} 
                                    >
                                        {
                                            (props) => (
                                                <Form>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlInput1">ID:</label>
                                                        <input className="form-control" type="text" placeholder={this.state.account.accountId} disabled
                                                            name="accountId" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlInput1">User name:</label>
                                                        <input type="text" className="form-control" placeholder={this.state.account.username} disabled
                                                            name="username" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlInput1">Password:</label>
                                                        <input type="text" className="form-control" placeholder={this.state.account.password}
                                                            name="password" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlInput1">Created date:</label>
                                                        <input type="date" className="form-control"
                                                            disabled
                                                            value = {this.state.createdDate}
                                                            name="createdDate" />
                                                    </div>
                                                    <div className="form-check">
                                                        <span>Status account:</span> <br />
                                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="true" defaultChecked />
                                                        <label className="form-check-label" htmlFor="exampleRadios1" name="status">
                                                            True
                                                        </label>
                                                        <br />
                                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="false" />
                                                        <label className="form-check-label" htmlFor="exampleRadios2" name="status">
                                                            False
                                                        </label>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleFormControlSelect1">Role account:</label>
                                                            <select className="form-control" id="exampleFormControlSelect1"
                                                                name="roleAccount" value = {this.state.account.fkRoleAccount}>
                                                                {this.mappingDataAllAccounts()}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-primary"
                                                        onClick={this.onUpdateSubmit()}>
                                                        Save
                                                    </button>
                                                </Form>
                                            )
                                        }
                                    </Formik>
                                </div>
                            </div>
                        </div>
                        <FooterHomepageComponent />
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateAccountComponent;