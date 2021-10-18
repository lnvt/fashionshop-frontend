import React, { Component } from 'react';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import RoleAccountService from '../../../../../services/RoleAccountService';
import moment from 'moment';

class CreateAccountComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            acccount: {},
            roleAccounts: [],
            dateNow: moment(new Date()).format('YYYY-MM-DD'),
        }
    }


    updateAccount() {
        console.log("Save");
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

    mappingDataAccount = () => (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">User name:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Password:</label>
                    <input type="text" className="form-control" name="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Created date:</label>
                    <input type="date" className="form-control" value={this.state.dateNow}/>
                </div>
                <div class="form-check">
                    <span>Status account:</span> <br />
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="true" checked />
                    <label className="form-check-label" for="exampleRadios1">
                        True
                    </label>
                    <br />
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="false" />
                    <label className="form-check-label" for="exampleRadios2">
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
                    onClick={this.updateAccount()}>
                    Save
                </button>
                <a className="btn btn-danger btn-block bi bi-skip-forward-btn-fill fixed-bottom" 
                    href="/home-page" role="button"
                    style ={{width:50}}
                > </a>
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
                                    <h1>Create account</h1>
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

export default CreateAccountComponent;