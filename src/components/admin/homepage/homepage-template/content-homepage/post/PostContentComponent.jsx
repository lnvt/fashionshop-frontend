import React, { Component } from 'react';
import PostService from '../../../../../services/PostService';
import CommentService from '../../../../../services/CommentService';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import { Link } from 'react-router-dom';
import LeftMenuComponent from '../../menu/LeftMenuComponent';
import moment from 'moment';

class PostContentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            post: {},
            comments:[],
        }
    }

    componentDidMount = () => {
        this.retrieveAllPost();
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
        CommentService.retrieveAllComment()
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
    }

    mappingDataAllPost = () => this.state.posts.map((item, key) => (
        <tr key={item.postId}>
            <th scope="row">{item.postId}</th>
            <td>{item.postName}</td>
            <td>{item.postDescription}</td>
            <td>{moment(item.postTime).format('YYYY-MM-DD')}</td>
            <td>{item.fkAccountPost}</td>
            <td>
                <Link to={{
                    pathname: `/post/${item.postId}`
                }}>
                    <button className="btn btn-warning" style={{width:100}}> Update </button>
                </Link>
                &nbsp;
                <button className="btn btn-danger" 
                    style={{width:100}}
                    onClick={() => this.deleteAccountClicked(item.postId)} > Delete </button>
            </td>
        </tr>
    ))

    render() {
        return (
            <div className="contentPage">
                <div id="wrapper">
                    <LeftMenuComponent />
                    <div id="content-wrapper bg-white" className="d-flex flex-column">
                        <div id="content">
                            <HeaderHompageComponent />
                            <div className="container-fluid" style={{width:1122}}>
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="mx-auto">Post</h1>
                                </div>
                                <div className="d-flex bd-highlight">
                                    <div className="p-2 w-100 bd-highlight">
                                        <table className="table table-hover table_management ">
                                            <thead className="table-info">
                                                <tr>
                                                    <th scope="col">Post ID</th>
                                                    <th scope="col">Post name</th>
                                                    <th scope="col">Post description</th>
                                                    <th scope="col">Post time</th>
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
                        </div>
                        <FooterHomepageComponent />
                    </div>
                </div>
            </div>
        );
    }
}

export default PostContentComponent;