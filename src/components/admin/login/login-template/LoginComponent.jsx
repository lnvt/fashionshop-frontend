import React, { Component } from 'react';
import './LoginStyle.css';
import Swal from 'sweetalert2'


class LoginComponent extends Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    // Execute function
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked = (event) => {
        event.preventDefault()
        if (this.state.username === 'admin' && this.state.password === 'admin') {
            this.props.history.push("/home-page"); 
        }
        else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error',
                width: 300,
                heigth: 50,
                text: 'Wrong username or password. Try it again',
                showConfirmButton: false,
                timer: 2000
              })
        }
    }
    render() {
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100 imgBg background-login">
                        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                            <form className="login100-form validate-form">
                                <span className="login100-form-title p-b-49">
                                    Login
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
                                    <a href="/#">
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
                                    <a href="/#" className="login100-social-item bg1">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="/#" className="login100-social-item bg2">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="/#" className="login100-social-item bg3">
                                        <i className="bi bi-google" />
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



export default LoginComponent;