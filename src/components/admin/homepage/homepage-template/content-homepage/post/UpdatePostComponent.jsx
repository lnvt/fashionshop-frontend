import React, { Component } from 'react';
import PostService from '../../../../../services/PostService';
import AccountService from '../../../../../services/AccountService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import { Form, Formik, Field } from 'formik';
import moment from 'moment';

class UpdatePostComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.match.params.id,
            postName: "",
            postDescription: "",
            postTime: moment(new Date()).format('YYYY-MM-DD'),
            fkAccountPost: 0,
            account: {}
        }
        this.onUpdateSubmit = this.onUpdateSubmit.bind(this);
    }
    
    componentDidMount = () => {
        this.retrieveAccount();
    }

    retrievePost = () => {
        PostService.retrievePostService(this.state.postId)
        .then(response => {
            this.setState({
                postName: response.data.postName,
                postDescription:  response.data.postDescription,
                postTime: moment(new Date()).format('YYYY-MM-DD'),
                fkAccountPost: response.data.fkAccountPost,
            })
        })
    }

    
    retrieveAccount = () => {
        AccountService.retrieveAccountService()
            .then(response => {
                console.log(response)
                this.setState({
                    account: response.data
                })
            })
    }

    onUpdateSubmit(values) {

        let post = {
            postId: this.state.postId,
            postName: values.postName,
            postDescription: values.postDescription,
            postTime: moment(new Date()).format('YYYY-MM-DD'),
            fkAccountPost: values.fkAccountPost,
        }
        PostService.updatePost(this.state.postId, post)
            .then(() => this.props.history.push('/post'))
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
                                    <h1>Update post</h1>
                                </div>
                                <div className="form-update-account">
                                    <Formik
                                        initialValues={{
                                            postId, postName, postDescription, postTime, fkAccountPost
                                        }}
                                        onSubmit={this.onUpdateSubmit} 
                                        enableReinitialize= {true}
                                    >
                                        {
                                            (props) => (
                                                <Form>
                                                    <fieldset className="form-group">
                                                        <label>ID</label>
                                                        <Field className="form-control"  type="text" name="postId"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Post name</label>
                                                        <Field className="form-control"  type="text" name="postName"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Post Description</label>
                                                        <Field className="form-control"  type="text" name="postDescription"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Post time</label>
                                                        <Field className="form-control"  type="date" name="postTime"/>
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Account</label>
                                                        <Field className="form-control"  type="text" name="fkAccountPost"/>
                                                    </fieldset>
                                                    <button className="btn btn-primary"
                                                        onClick={this.onUpdateSubmit.bind(this)}>
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

export default UpdatePostComponent;