import React, { Component } from 'react';
import PostService from '../../../../../services/PostService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import { Form, Formik, Field } from 'formik';
import moment from 'moment';

class CreatePostComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postId: "",
            postName: "",
            postDescription: "",
            postTime: moment(new Date()).format('YYYY-MM-DD'),
            fkAccountPost: "",
        }
        this.onCreateSubmit = this.onCreateSubmit.bind(this);
    }

    onCreateSubmit(values) {
        let post = {
            postId: parseInt(values.accountId),
            postName: values.username,
            postDescription: values.password,
            postTime: moment(new Date()).format('YYYY-MM-DD'),
            fkAccountPost: values.fkRoleAccount
        }
        PostService.createPost(post)
            .then(() => this.props.history.push('/home-page'))
    }

    render() {
        let { postId, postName, postDescription, postTime, fkAccountPost } = this.state;
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
                                            postId, postName, postDescription, postTime, fkAccountPost 
                                        }}
                                        onSubmit={this.onCreateSubmit}
                                        enableReinitialize={true}
                                    >
                                        {
                                            (props) => (
                                                <Form>
                                                    <fieldset className="form-group">
                                                        <label>Post ID</label>
                                                        <Field className="form-control" type="text" name="postId" />
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Post name</label>
                                                        <Field className="form-control" type="text" name="postName" />
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Post description</label>
                                                        <Field className="form-control" type="text" name="postDescription" />
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Post time</label>
                                                        <Field className="form-control" type="date" name="createdDate" />
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Account</label>
                                                        <Field className="form-control" type="date" name="fkAccountPost" />
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

export default CreatePostComponent;