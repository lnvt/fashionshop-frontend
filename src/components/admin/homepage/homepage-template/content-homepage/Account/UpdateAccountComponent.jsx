import React, { Component } from 'react';
import AccountService from '../../../../../services/AccountService';
import RoleAccountService from '../../../../../services/RoleAccountService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';

class UpdateAccountComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            acccount: {},
            roleAccounts: [],
        }
    }


    componentDidMount = () => {
        this.retrieveAccount();
        this.retrieveAllRoleAccount();
    }

    retrieveAccount = (id) => {
        AccountService.retrieveAccountService(this.props.match.params.id)
            .then(response => {
                this.setState({
                    acccount: response.data
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
        <option value= {item.roleId}> {item.roleName} </option>
    ))

    updateAccount() {
        console.log("Save");
    }
    mappingDataAccount = () => (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">ID:</label>
                    <input className="form-control" type="text" placeholder={this.state.acccount.accountId} disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">User name:</label>
                    <input type="text" className="form-control" placeholder={this.state.acccount.username} disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Password:</label>
                    <input type="text" className="form-control" placeholder={this.state.acccount.password} name="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Created date:</label>
                    <input type="date" className="form-control" placeholder={this.state.acccount.createdDate} disabled />
                </div>
                <div class="form-check">
                    <span>Status account:</span> <br/>
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="true" checked/>
                    <label className ="form-check-label" for="exampleRadios1">
                        True
                    </label>
                    <br/>
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="false"/>
                    <label className ="form-check-label" for="exampleRadios2">
                        False
                    </label>
                </div>
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Role account:</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            {this.mappingDataAllAccounts()}
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary"
                        onClick = {this.updateAccount()}>
                    Save
                </button>
            </form>

        </div>
    )

    render() {
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
                                    {this.mappingDataAccount()}
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