import React, { Component } from 'react';
import CodeSaleService from '../../../../../services/CodeSaleService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import { Link } from 'react-router-dom';

class CodeSaleContentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            codesales: [],
            codesale: {},
        }
    }

    componentDidMount = () => {
        this.retrieveAllCodeSale();
    }

    retrieveAllCodeSale = () => {
        CodeSaleService.retrieveAllCodeSaleService()
        .then(response => {
            this.setState({
                codesales: response.data
            })
        })
    }

    mappingDataAllCodeSale = () => this.state.codesales.map((item, key) => (
        <tr key={item.codeSaleId}>
            <th scope="row">{item.codeSaleId}</th>
            <td>{item.codeSaleName}</td>
            <td>{item.codeSalePercentCost}</td>
            <td>{item.codeSaleStatus}</td>
            <td>
                <Link to={{
                    pathname: `/codesale/${item.codeSaleId}`
                }}>
                <button className="btn btn-warning"> Update </button>
                </Link>
                &nbsp;
                <button className="btn btn-danger"
                    onClick={() => this.deleteAccountClicked(item.codeSaleId)}> Delete </button>
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
                            <h1>Cart</h1>
                        </div>
                        <div className="d-flex bd-highlight">
                            <div className="p-2 w-100 bd-highlight">
                                <table className="table table-hover table_management ">
                                    <thead className="table-info">
                                        <tr>
                                            <th scope="col">Code sale ID</th>
                                            <th scope="col">Code sale name</th>
                                            <th scope="col">Code sale percent cost</th>
                                            <th scope="col">Code sale status</th>
                                            <th scope="col">Feature</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.mappingDataAllCodeSale()}
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

export default CodeSaleContentComponent;