import React, { Component } from 'react';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import RoleAccountService from '../../../../../services/RoleAccountService';
import moment from 'moment';
import { Form, Formik, Field } from 'formik';
import AccountService from '../../../../../services/AccountService';

class CreateAccountComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            acccount: {},
            roleAccounts: [],
            accountId: this.props.match.params.id,
            username: "",   
            password: "",
            status: true,
            createdDate: moment(new Date()).format('YYYY-MM-DD'),
            fkRoleAccount: "",
        }
        this.onCreateSubmit = this.onCreateSubmit.bind(this);
    }


    componentDidMount = () => {
        this.retrieveAllRoleAccount();
    }

    onCreateSubmit(values) {
        let account = {
            accountId: parseInt(values.accountId),
            username: values.username,   
            password: values.password,
            status: values.status,
            createdDate: moment(new Date()).format('YYYY-MM-DD'),
            fkRoleAccount: values.fkRoleAccount
        }
        AccountService.createAccount(account)
            .then(() => this.props.history.push('/home-page'))
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
    render() {
        let { accountId, username, password, createdDate, status, fkRoleAccount} = this.state;
        return (
            <div>
                <div className="contentPage">
                    <div id="content-wrapper bg-white" className="d-flex flex-column">
                        <div id="content">
                            <HeaderHompageComponent />
                            <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1>Create account</h1>
                                </div>
                                <div className="form-create-account">
                                <Formik
                                        initialValues={{
                                          accountId, username, password, createdDate, status, fkRoleAccount
                                        }}
                                        onSubmit={this.onCreateSubmit} 
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
                                                        <label>Created date</label>
                                                        <Field className="form-control"  type="date" name="createdDate"/>
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
                                                        onClick={this.onCreateSubmit    }>
                                                        Create
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

export default CreateAccountComponent;