import React, { Component } from 'react';
import FooterHomepageComponent from '../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../header-homepage/HeaderHompageComponent';
import './ContentHomepageStyle.css';
import AccountServices from '../../../services/AccountServices';

class ContentHomepageComponent extends Component {

    checkGetAllAccountServices = () => {
        AccountServices.getAllAccountServices()
        .then( response =>  {this.getAllAcount(response)})    
    }

    getAllAcount(response){
        console.log(response);
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
                            <div className="row">
                                <table className="table table-hover table_management">
                                    <thead className="table-info">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">UserName</th>
                                            <th scope="col">Password</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Created Date</th>
                                            <th scope="col">Feature</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>True</td>
                                            <td>23123</td>
                                            <td>
                                                <button className="btn btn-warning">Update</button> 
                                                &nbsp;
                                                <button className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
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