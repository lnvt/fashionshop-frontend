import React, { Component } from 'react';
import FooterHomepageComponent from '../../footer-homepage/FooterHomepageComponent';
import HeaderHompageComponent from '../../header-homepage/HeaderHompageComponent';
import './ContentHomepageStyle.css';
import Swal from 'sweetalert2';
import AccountService from '../../../../../services/AccountService';
import { Link } from 'react-router-dom';
// import CartService from '../../../../services/CartService';
// import CodeSaleService from '../../../../services/CodeSaleService';
// import CommentService from '../../../../services/CommentService';
// import ImageService from '../../../../services/ImageService';
// import ListProductService from '../../../../services/ListProductService';
// import MenuService from '../../../../services/MenuService';
// import PaymentService from '../../../../services/PaymentService';
// import PostService from '../../../../services/PostService';
// import ProductService from '../../../../services/ProductService';
// import RoleAccountService from '../../../../services/RoleAccountService';
// import SlideShowService from '../../../../services/SlideShowService';


class ContentHomepageComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            accounts: [],
            message: null,
            showFormAddAccount: false,
            showFormUpdateAccount: false,
            account: {},
        }
    }

    componentDidMount = () => {

        // Services 
        this.retrieveAllAccount();
        // this.retrieveAllCart();
        // this.retrieveAllCodeSale();
        // this.retrieveAllComment();
        // this.retrieveAllImageService();
        // this.retrieveAllListProduct();
        // this.retrieveAllMenu();
        // this.retrieveAllPayment();
        // this.retrieveAllPost();
        // this.retrieveAllProduct();
        // this.retrieveAllRoleAccount();
        // this.retrieveAllSlideShow();

        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Login Success!',
            showConfirmButton: false,
            timer: 1500
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

    deleteAccountClicked = (id) => {
        AccountService.deleteAccountService(id)
            .then(response => {
                   this.retrieveAllAccount();
            })
    }

    // retrieveAllCart = () => {
    //     CartService.retrieveAllCartService()
    //     .then(response => {
    //         console.log(response)
    //     })
    // }
    // retrieveAllCodeSale = () => {
    //     CodeSaleService.retrieveAllCodeSaleService()
    //     .then(response => {
    //         console.log(response)
    //     })
    // }
    // retrieveAllComment = () => {
    //     CommentService.retrieveAllCommentService()
    //     .then(response => {
    //         console.log(response)
    //     })
    // }
    // retrieveAllImageService = () => {
    //     ImageService.retrieveAllImageService()
    //     .then(response => {
    //         console.log(response)
    //     })
    // }
    // retrieveAllListProduct = () => {
    //     ListProductService.retrieveAllListProductService()
    //     .then(response => {
    //         console.log(response)
    //     })
    // }
    // retrieveAllMenu = () => {
    //     MenuService.retrieveAllMenuService()
    //     .then(response => {
    //         console.log(response)
    //     })
    // }
    // retrieveAllPayment = () => {
    //     PaymentService.retrieveAllPaymentService()
    //     .then(response => {
    //         console.log(response)
    //     })
    // }
    // retrieveAllPost = () => {
    //     PostService.retrieveAllPostService()
    //     .then(response => {
    //         console.log(response)
    //     })
    // }
    // retrieveAllProduct = () => {
    //     ProductService.retrieveAllProductService()
    //     .then(response => {
    //         console.log(response)
    //     })
    // }
    // retrieveAllRoleAccount = () => {
    //     RoleAccountService.retrieveAllRoleAccountService()
    //     .then(response => {
    //         console.log(response)
    //     })
    // }
    // retrieveAllSlideShow = () => {
    //     SlideShowService.retrieveAllSlideShowService()
    //     .then(response => {
    //         console.log(response)
    //     })
    // }

    mappingDataAllAccounts = () => this.state.accounts.map((item, key) => (
        <tr key={item.accountId}>
            <th scope="row">{item.accountId}</th>
            <td>{item.username}</td>
            <td>{item.password}</td>
            <td>{item.status.toString()}</td>
            <td>{item.createdDate}</td>
            <td>
                <Link to={{
                    pathname: `/account/${item.accountId}`
                }}>
                <button className="btn btn-warning"> Update </button>
                </Link>
                &nbsp;
                <button className="btn btn-danger"
                    onClick={() => this.deleteAccountClicked(item.accountId)}> Delete </button>
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
                                <h1>Account Administration</h1>
                            </div>
                            <div className="d-flex bd-highlight">
                                <div className="p-2 w-100 bd-highlight">
                                    <table className="table table-hover table_management ">
                                        <thead className="table-info">
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">UserName</th>
                                                <th scope="col">Password</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Created date</th>
                                                <th scope="col">Feature</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.mappingDataAllAccounts()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="btn btn-info mb-2">
                            <Link to={{
                                pathname: `/account/create`
                            }}> Create Account </Link>
                        </div>
                    </div>
                    <FooterHomepageComponent />
                </div>
            </div>
        );
    }
}

export default ContentHomepageComponent;