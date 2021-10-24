import React, { Component } from 'react';
import CodeSaleService from '../../../../../services/CodeSaleService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import LeftMenuComponent from '../../menu/LeftMenuComponent';
import { Form, Formik, Field } from 'formik';
import Swal from 'sweetalert2';
import './CodeSaleContentStyle.css';

class CodeSaleContentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            codesales: [],
            codesale: {},
            codeSaleId: "",
            codeSaleName: "",
            codeSaleStatus: true,
            codeSalePercentCost: 0,
        }
        this.saveCreateCodeSale = this.saveCreateCodeSale.bind(this);
    }

    componentDidMount = () => {
        this.retrieveAllCodeSale();
    }

    retrieveAllCodeSale = () => {
        CodeSaleService.retrieveAllCodeSaleService()
            .then(response => {
                console.log(response.data)
                this.setState({
                    codesales: response.data
                })
            })
    }

    deleteAccountClicked = (id, name) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want delete ${name} ?`,
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
                CodeSaleService.deleteCodeSaleService(id)
                    .then(response => {
                        this.retrieveAllCodeSale();
                    })
            }
        })

    }
    mappingDataAllCodeSale = () => this.state.codesales.map((item, key) => (
        <tr key={item.codeSaleId}>
            <th scope="row">{item.codeSaleId}</th>
            <td>{item.codeSaleName}</td>
            <td>{item.codeSalePercentCost}</td>
            <td>
                {item.codeSaleStatus.toString()}
            </td>
            <td>
                <button className="btn btn-danger"
                    onClick={() => this.deleteAccountClicked(item.codeSaleId, item.codeSaleName)} style={{ width: 100 }}> Delete </button>
            </td>
        </tr>
    ))

    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    saveCreateCodeSale = (values) => {
        let codesale = {
            codeSaleId: values.codeSaleId,
            codeSaleName: this.makeid(10),
            codeSalePercentCost: values.codeSalePercentCost,
            codeSaleStatus: this.state.codeSaleStatus,
        }
        CodeSaleService.createCodeSale(codesale)
            .then(() => {
                this.retrieveAllCodeSale();
            })
    }

    render() {
        let { codeSaleId, codeSaleName, codeSalePercentCost, codeSaleStatus } = this.state;
        return (
            <div className="contentPage">
                <div id="wrapper">
                    <LeftMenuComponent />
                    <div id="content-wrapper bg-white" className="d-flex flex-column" style={{ width: 1122 }}>
                        <div id="content">
                            <HeaderHompageComponent />
                            <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="mx-auto">Cart</h1>
                                </div>
                                <div className="addCodeSale">

                                    <Formik
                                        initialValues={{
                                            codeSaleId, codeSaleName, codeSalePercentCost, codeSaleStatus
                                        }}
                                        onSubmit={this.saveCreateCodeSale}
                                        enableReinitialize={true}
                                    >
                                        {(props) => (
                                            <Form>
                                                <div class="row">
                                                    <div class="col">
                                                        <fieldset className="form-group">
                                                            <label>Code sale percent</label>
                                                            <Field className="form-control numberCodeSale"  type="text" name="codeSalePercentCost"/>
                                                        </fieldset>
                                                    </div>
                                                    <div class="col">
                                                        <fieldset className="form-group">
                                                            <div>
                                                                <label>Status account:</label>
                                                            </div>
                                                            <label className="mr-5">
                                                                <Field type="radio" name="codeSaleStatus" value="true" />
                                                                True
                                                            </label>
                                                            <label>
                                                                <Field type="radio" name="codeSaleStatus" value="false" />
                                                                False
                                                            </label>

                                                        </fieldset>
                                                    </div>
                                                </div>
                                                <button className="btn btn-success mb-2" onClick={this.saveCreateCodeSale}> Create CodeSale</button>
                                            </Form>
                                        )}
                                    </Formik>
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
            </div>
        );
    }
}

export default CodeSaleContentComponent;