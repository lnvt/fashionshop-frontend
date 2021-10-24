import React, { Component } from 'react';
import PostService from '../../../../../services/PostService';
import CommentService from '../../../../../services/CommentService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import LeftMenuComponent from '../../menu/LeftMenuComponent';
import AccountService from '../../../../../services/AccountService';
import Swal from 'sweetalert2';
import { Form, Formik, Field } from 'formik';

class PostContentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            post: {},
            comments: [],
            accounts: [],
            status: true
        }
    }

    componentDidMount = () => {
        this.retrieveAllPost();
        this.retrieveAllComment();
        this.retrieveAllAccount();
    }

    retrieveAllPost = () => {
        PostService.retrieveAllPostService()
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
    }

    retrieveAllComment = () => {
        CommentService.retrieveAllCommentService()
            .then(response => {
                this.setState({
                    comments: response.data
                })
            })
    }


    retrieveAllAccount = () => {
        AccountService.retrieveAllAccountService()
            .then(response => {
                this.setState({
                    accounts: response.data
                })
            })
    }

    getAccountName = (accountIds) => this.state.accounts.map((item, key) => {
        if (item.accountId === accountIds) {
            return (
                <div key={key}>
                    {item.username}
                </div>
            )
        }
        return null;
    })

    getAccountNameFollowComment = (accountIds) => this.state.accounts.map((item, key) => {
        if (item.accountId === accountIds) {
            return (
                <div key={key}>
                    {item.username}
                </div>
            )
        }
        return null;
    })


    deletePostClicked = (id, username) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want delete ${username} ?`,
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
                PostService.deletePostService(id)
                    .then(response => {
                        this.retrieveAllPost();
                    })
            }
        })

    }

    mappingDataAllPost = () => this.state.posts.map((item, key) => (
        <tr key={item.postId}>
            <th scope="row">{item.postId}</th>
            <td>{item.postName}</td>
            <td>{item.postDescription}</td>
            <td>
                {this.getAccountName(item.fkAccountPost)}
            </td>
            <td>
                <button className="btn btn-danger"
                    style={{ width: 100 }}
                    onClick={() => this.deletePostClicked(item.postId, item.postName)} > Delete </button>
            </td>
        </tr>
    ))


    deleteCommentClicked = (id, username) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want delete ${username} ?`,
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
                CommentService.deleteCommentService(id)
                    .then(response => {
                        this.retrieveAllComment();
                    })
            }
        })

    }

    mappingDataAllComment = () => this.state.comments.map((item, key) => (
        <tr key={item.commentId}>
            <th scope="row">{item.commentId}</th>
            <td>{item.commentDescription}</td>
            <td>
                {this.getAccountNameFollowComment(item.fkAccountComment)}
            </td>
            <td>{item.fkPostComment}</td>
            <td>
                <button className="btn btn-danger"
                    style={{ width: 100 }}
                    onClick={() => this.deleteCommentClicked(item.commentId, item.commentDescription)} > Delete </button>
            </td>
        </tr>
    ))

    mappingDataAllAccounts = () => this.state.accounts.map((item, key) => (
        <option value={item.accountId}> {item.username} </option>
    ))

    mappingDataSelectPost = () => this.state.posts.map((item, key) => (
        <option value={item.postId}> {item.postName} </option>
    ))
    onCreatePostSubmit(values) {
        let post = {
            postId: parseInt(values.postId),
            postName: values.postName,   
            postDescription: values.postDescription,
            fkAccountPost: values.fkAccountPost
        }
        PostService.createPostService(post)
        .then(() => {})
    }

    onCreateCommentSubmit(values) {
        let comment = {
            commentId: parseInt(values.commentId),
            commentDescription: values.commentDescription,   
            commentStatus: values.commentStatus,
            fkAccountComment: values.fkAccountComment,
            fkPostComment: values.fkPostComment
        }
        CommentService.createCommentService(comment)
            .then(() => {
                
            })
        console.log(values)
    }


    render() { 
        let { postId, postName, postDescription, fkAccountPost } = this.state;
        let {commentId, commentDescription, commentStatus, fkAccountComment, fkPostComment} = this.state;
        return (
            <div className="contentPage">
                <div id="wrapper">
                    <LeftMenuComponent />
                    <div id="content-wrapper bg-white" className="d-flex flex-column">
                        <div id="content">
                            <HeaderHompageComponent />
                            <div className="container-fluid" style={{ width: 1122 }}>
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="mx-auto">Post</h1>
                                </div>
                                <div className=" container createPost">
                                    <div className="container">
                                        <Formik
                                              initialValues={{
                                                postId, postName, postDescription, fkAccountPost
                                              }}
                                              onSubmit={this.onCreatePostSubmit} 
                                              enableReinitialize= {true}
                                        >
                                            {(props) => (
                                                <Form>
                                                    <div className="row">
                                                        <div className="col">
                                                            <fieldset className="form-group">
                                                                <label>Post title</label>
                                                                <Field className="form-control inputPost" type="text" name="postName" />
                                                            </fieldset>
                                                        </div>
                                                        <div className="col">
                                                            <fieldset className="form-group">
                                                                <label>Post description</label>
                                                                <Field className="form-control inputPost" type="text" name="postDescription" />
                                                            </fieldset>
                                                        </div>
                                                        <div className="col">
                                                            <fieldset className="form-group">
                                                                <label>Account</label>
                                                                <Field component="select" className="form-control" type="text" name="fkAccountPost">
                                                                    {this.mappingDataAllAccounts()}
                                                                </Field>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-primary"
                                                        onClick={this.onCreatePostSubmit}>
                                                        Create
                                                    </button>
                                                </Form>
                                            )}

                                        </Formik>
                                    </div>
                                </div>
                                <div className="d-flex bd-highlight">
                                    <div className="p-2 w-100 bd-highlight">
                                        <table className="table table-hover table_management ">
                                            <thead className="table-info">
                                                <tr>
                                                    <th scope="col">Post ID</th>
                                                    <th scope="col">Post title</th>
                                                    <th scope="col">Post description</th>
                                                    <th scope="col">Account post</th>
                                                    <th scope="col">Feature</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.mappingDataAllPost()}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="container-fluid" style={{ width: 1122 }}>
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="mx-auto">Comment</h1>
                                </div>
                                <div className=" container createComment">
                                    <div className="container">
                                        <Formik 
                                             initialValues={{
                                                commentId, commentDescription, commentStatus, fkAccountComment, fkPostComment
                                              }}
                                              onSubmit={this.onCreateCommentSubmit} 
                                              enableReinitialize= {true}
                                        >
                                            {(props) => (
                                                <Form>
                                                    <div className="row">
                                                        <div className="col">
                                                            <fieldset className="form-group">
                                                                <label>Comment content</label>
                                                                <Field className="form-control inputComment" type="text" name="commentDescription" />
                                                            </fieldset>
                                                        </div>
                                                        <div className="col">
                                                            <fieldset className="form-group">
                                                                <label>Account</label>
                                                                <Field component="select" className="form-control inputComment" type="text" name="fkAccountComment">
                                                                    {this.mappingDataAllAccounts()}
                                                                </Field>
                                                            </fieldset>
                                                        </div>
                                                        <div className="col">
                                                            <fieldset className="form-group">
                                                                <label>Post</label>
                                                                <Field component="select" className="form-control inputComment" type="text" name="fkPostComment">
                                                                    {this.mappingDataSelectPost()}
                                                                </Field>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-primary"
                                                        onClick={this.onCreateCommentSubmit}>
                                                        Create
                                                    </button>
                                                </Form>
                                            )}

                                        </Formik>
                                    </div>
                                </div>
                                <div className="d-flex bd-highlight">
                                    <div className="p-2 w-100 bd-highlight">
                                        <table className="table table-hover table_management ">
                                            <thead className="table-info">
                                                <tr>
                                                    <th scope="col">Comment ID</th>
                                                    <th scope="col">Comment Description</th>
                                                    <th scope="col">Account </th>
                                                    <th scope="col">Post</th>
                                                    <th scope="col">Feature</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.mappingDataAllComment()}
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

export default PostContentComponent;