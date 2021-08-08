import React, { Component } from 'react';
import AuthenticationSessionService from '../../homepage/test/AuthenticationSessionService.js';

class LoginComponent extends Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            username: "admin",
            password: "admin",
            hasLoginFailed: false,
            showSuccessMessage: false

        }
    }

    // Execute function
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked = (event) => {
        //console.log(this.state);
        if (this.state.username === 'admin' && this.state.password === 'admin') {
            AuthenticationSessionService.registerSuccessFullLogin(this.state.username, this.state.password);
            //this.props.history.push("/home-page")
            this.props.history.push(`/home-page/${this.state.username}`)
            this.setState({ showSuccessMessage: true })
            this.setState({ hasLoginFailed: false })
        }
        else {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
    }
    render() {
        return (
            <div>
                <title>Login V4</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
                <link rel="stylesheet" type="text/css" href="../login-assets/vendor/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="../login-assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" type="text/css" href="../login-assets/fonts/iconic/css/material-design-iconic-font.min.css" />
                <link rel="stylesheet" type="text/css" href="../login-assets/vendor/animate/animate.css" />
                <link rel="stylesheet" type="text/css" href="../login-assets/vendor/css-hamburgers/hamburgers.min.css" />
                <link rel="stylesheet" type="text/css" href="../login-assets/vendor/animsition/css/animsition.min.css" />
                <link rel="stylesheet" type="text/css" href="../login-assets/vendor/select2/select2.min.css" />
                <link rel="stylesheet" type="text/css" href="../login-assets/vendor/daterangepicker/daterangepicker.css" />
                <link rel="stylesheet" type="text/css" href="../login-assets/css/util.css" />
                <link rel="stylesheet" type="text/css" href="../login-assets/css/main.css" />
                <div className="limiter">
                    <div className="container-login100" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
                        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                            <form className="login100-form validate-form">
                                <span className="login100-form-title p-b-49">
                                    Login
                                    {/* || <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                                    { this.state.hasLoginFailed && <div> <span>Invalid Credentical</span> </div> }
                                    {/* || <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                                    { this.state.showSuccessMessage &&  <div> <span>Login Success</span> </div> }
                                </span>
                                <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                                    <span className="label-input100">Username</span>
                                    <input className="input100"
                                        type="text"
                                        name="username"
                                        placeholder="Type your username"
                                        defaultValue={this.state.username}
                                        onChange={this.handleChange} />
                                    <span className="focus-input100" data-symbol="" />
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <span className="label-input100">Password</span>
                                    <input className="input100"
                                        type="password"
                                        name="password"
                                        placeholder="Type your password"
                                        defaultValue={this.state.password}
                                        onChange={this.handleChange} />
                                    <span className="focus-input100" data-symbol="" />
                                </div>
                                <div className="text-right p-t-8 p-b-31">
                                    <a href="#">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn" />
                                        <button className="login100-form-btn"
                                            onClick={this.loginClicked}>
                                            Login
                                        </button>
                                    </div>
                                </div>
                                <div className="txt1 text-center p-t-54 p-b-20">
                                    <span>
                                        Or Sign Up Using
                                    </span>
                                </div>
                                <div className="flex-c-m">
                                    <a href="#" className="login100-social-item bg1">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#" className="login100-social-item bg2">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#" className="login100-social-item bg3">
                                        <i className="fa fa-google" />
                                    </a>
                                </div>
                                <div className="flex-col-c p-t-155">
                                    <span className="txt1 p-b-17">
                                        Or Sign Up Using
                                    </span>
                                    <a href="#" className="txt2">
                                        Sign Up
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="dropDownSelect1" />
            </div>

        );
    }
}

// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return (
//             <div>
//                 <div>
//                     <span>Invalid Credentical</span>
//                 </div>
//             </div>
//         );
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props) {
//     if (props.showSuccessMessage) {
//         return (
//             <div>
//                 <div>
//                     <span>Login Success</span>
//                 </div>
//             </div>
//         );
//     }
//     return null
// }

export default LoginComponent;