import React, { Component } from 'react';
import FooterHomepageComponent from '../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../header-homepage/HeaderHompageComponent';
import { Formik, Form } from 'formik';

class UpdateAccountComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {


        }
    }

    render() {
        return (
            <div>
                <div className="contentPage">
                    <div id="content-wrapper bg-white" className="d-flex flex-column">
                        <div id="content">
                            <HeaderHompageComponent />
                            <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1> Update Account Id - {this.props.match.params.id} </h1>
                                </div>
                                <div className="row  d-flex justify-content-center">
                                    <Formik>
                                        {
                                            (props) => (
                                                <Form>
                                                    <div>
                                                        <label htmlFor="">Status:</label>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                            <label class="form-check-label" for="inlineRadio1">True</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                            <label class="form-check-label" for="inlineRadio2">False</label>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-success">Success</button>
                                                    </div>
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