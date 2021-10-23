import React, { Component } from 'react';
import ProductService from '../../../../../services/ProductService';
import { Form, Formik, Field } from 'formik';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';

class UpdateProductComponent extends Component {

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
        this.onUpdateSubmit = this.onUpdateSubmit.bind(this);
    }
    
    componentDidMount = () => {
        this.retrieveProduct();
        ProductService.retrieveProductService(this.props.productId)
        .then(response => {
            console.log(response.data)
            this.setState({
                productId: this.state.productId,
                productName: response.data.productName,
                productCost: response.data.productCost,
                productDescription: response.data.productDescription,
                productQuantity: response.data.productQuantity,
                productStatus: response.data.productStatus,
                fkImageProduct: response.data.fkImageProduct,
                fkListProduct: response.data.fkListProduct,
            })
        })
    }

    retrieveProduct = () => {
        ProductService.retrieveProductService(this.props.productId)
        .then(response => {
            console.log(response.data)
            this.setState({
                productId: this.state.productId,
                productName: response.data.productName,
                productCost: response.data.productCost,
                productDescription: response.data.productDescription,
                productQuantity: response.data.productQuantity,
                productStatus: response.data.productStatus,
                fkImageProduct: response.data.fkImageProduct,
                fkListProduct: response.data.fkListProduct,
            })
        })
    }

    onUpdateSubmit(values) {
        // let product = {
        //     productId: this.state.productId,
        //     productName: values.productName,
        //     productCost: values.productCost,
        //     productDescription: values.productDescription,
        //     productQuantity: values.productQuantity,
        //     productStatus: values.productStatus,
        //     fkImageProduct: values.fkImageProduct,
        //     fkListProduct: values.fkListProduct,
        // }
        // console.log(product)
    }


    render() {
        let { productId, productName, productCost, productDescription, productQuantity, productStatus, fkImageProduct, fkListProduct} = this.state;
        return (
            <div>
               <div className="contentPage">
                    <div id="content-wrapper bg-white" className="d-flex flex-column">
                        <div id="content">
                            <HeaderHompageComponent />
                            <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1>Update product</h1>
                                </div>
                                <div className="form-update-account">
                                    <Formik
                                        initialValues={{
                                            productId, productName, productCost, productDescription, productQuantity, productStatus, fkImageProduct, fkListProduct
                                        }}
                                        onSubmit={this.onUpdateSubmit} 
                                        enableReinitialize= {true}
                                    >
                                        {
                                            (props) => (
                                                <Form>
                                                    <fieldset className="form-group">
                                                        <label>Product ID</label>
                                                        <Field className="form-control"  type="text" name="productId"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Product name</label>
                                                        <Field className="form-control"  type="text" name="productName"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Product cost</label>
                                                        <Field className="form-control"  type="text" name="productCost"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Product description</label>
                                                        <Field className="form-control"  type="text" name="productDescription"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Product quantity</label>
                                                        <Field className="form-control"  type="text" name="productQuantity"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Product status</label>
                                                        <Field className="form-control"  type="text" name="productStatus"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Product image</label> <br/>
                                                        <img src={require('../../../../../imgs_product/BAGS/bags_1.png').default} style={{ width: 100 }} alt="" />
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Product list</label>
                                                        <Field className="form-control"  type="text" name="fkListProduct"/>
                                                    </fieldset>
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

export default UpdateProductComponent;