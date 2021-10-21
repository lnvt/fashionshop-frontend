import React, { Component } from 'react';
import AccountService from '../../../../../services/AccountService';
import RoleAccountService from '../../../../../services/RoleAccountService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import { Form, Formik, Field } from 'formik';
import moment from 'moment';

class UpdateAccountComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            roleAccounts: [],
            accountId: this.props.match.params.id,
            username: "",   
            password: "",
            status: true,
            updateDate: moment(new Date()).format('YYYY-MM-DD'),
            fkRoleAccount: 3,
        }
        this.onUpdateSubmit = this.onUpdateSubmit.bind(this);
    }


    componentDidMount = () => {
        this.retrieveAccount();
        this.retrieveAllRoleAccount();
       
    }

    retrieveAccount = () => {
        AccountService.retrieveAccountService(this.state.accountId)
        .then(response => {
            this.setState({
                username: response.data.username,   
                password: response.data.password,
                status: response.data.status,
                updateDate: moment(new Date()).format('YYYY-MM-DD'),
                fkRoleAccount: response.data.fkRoleAccount
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

        let account = {
            accountId: this.state.accountId,
            username: values.username,   
            password: values.password,
            status: values.status,
            updateDate: values.updateDate,
            fkRoleAccount: values.fkRoleAccount
        }
        AccountService.updateAccount(this.state.accountId, account)
            .then(() => this.props.history.push('/home-page'))
    }


    render() {
        let { accountId, username, password, updateDate, status, fkRoleAccount} = this.state;

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
                                          accountId, username, password, updateDate, status, fkRoleAccount
                                        }}
                                        onSubmit={this.onUpdateSubmit} 
                                        enableReinitialize= {true}
                                    >
                                        {
                                            (props) => (
                                                <Form>
                                                    <fieldset className="form-group">
                                                        <label>ID</label>
                                                        <Field className="form-control"  type="text" name="accountId"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>User name</label>
                                                        <Field className="form-control"  type="text" name="username"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Password</label>
                                                        <Field className="form-control"  type="text" name="password"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Update date</label>
                                                        <Field className="form-control"  type="date" name="updateDate"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <div>
                                                            <label>Status account:</label>
                                                        </div>
                        
                                                        <label className="mr-5">
                                                            <Field   type="radio" name="status" value="true"/>
                                                            True
                                                        </label>
                                                        <label>
                                                            <Field  type="radio" name="status" value="false"/>
                                                            False
                                                        </label>
                                                        
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Role Account</label>
                                                        <Field component="select" className="form-control"  type="text" name="fkRoleAccount">
                                                            {this.mappingDataAllAccounts()}
                                                        </Field>
                                                    </fieldset>
                                                    <button className="btn btn-primary"
                                                        onClick={this.onUpdateSubmit.bind(this)}>
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