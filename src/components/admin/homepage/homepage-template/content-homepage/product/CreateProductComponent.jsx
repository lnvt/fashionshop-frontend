import React, { Component } from 'react';
import ProductService from '../../../../../services/ProductService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import { Form, Formik, Field } from 'formik';

class CreateProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: this.props.match.params.id,
            productName: "",
            productCost: "",
            productDescription: "",
            productQuantity: 0,
            productStatus: true,
            fkImageProduct: "",
            fkListProduct: 0,
        }
        this.onCreateSubmit = this.onCreateSubmit.bind(this);
    }

    onCreateSubmit(values) {
        let product = {
            productId: parseInt(values.productId),
            productName: values.productName,
            productCost: values.productCost,
            productDescription: values.productDescription,
            productQuantity: values.productQuantity,
            productStatus: values.productStatus,
            fkImageProduct: values.fkImageProduct,
            fkListProduct: values.fkListProduct,
        }
        ProductService.createProductService(product)
            .then(() => this.props.history.push('/product'))
    }


    render() {
        let { productId, productName, productCost, productDescription, productQuantity, productStatus, fkImageProduct, fkListProduct } = this.state;
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
                                            productId, productName, productCost, productDescription, productQuantity, productStatus, fkImageProduct, fkListProduct 
                                        }}
                                        onSubmit={this.onCreateSubmit}
                                        enableReinitialize={true}
                                    >
                                        {
                                            (props) => (
                                                <Form>
                                                    <fieldset className="form-group">
                                                        <label>Product Id</label>
                                                        <Field className="form-control" type="text" name="productId" />
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Product Name</label>
                                                        <Field className="form-control" type="text" name="productName" />
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Product Cost</label>
                                                        <Field className="form-control" type="text" name="productCost" />
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Product Description</label>
                                                        <Field className="form-control" type="text" name="productDescription" />
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Product Quantity</label>
                                                        <Field className="form-control" type="date" name="productQuantity" />
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <div>
                                                            <label>Status product:</label>
                                                        </div>
                                                        <label className="mr-5">
                                                            <Field   type="radio" name="productStatus" value="true"/>
                                                            True
                                                        </label>
                                                        <label>
                                                            <Field  type="radio" name="productStatus" value="false"/>
                                                            False
                                                        </label>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Image</label>
                                                        <Field className="form-control" type="text" name="fkImageProduct" />
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Category</label>
                                                        <Field className="form-control" type="text" name="fkListProduct" />
                                                    </fieldset>
                                                    <button className="btn btn-primary"
                                                        onClick={this.onCreateSubmit}>
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

export default CreateProductComponent;