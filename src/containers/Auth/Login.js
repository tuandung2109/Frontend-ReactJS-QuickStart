import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
// import '@fortawesome/fontawesome-free/css/all.min.css';


import './Login.scss';
// import { FormattedMessage } from 'react-intl';
// import { divide } from 'lodash';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
        }
    }

    handleOnChangeUserName = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }    

    handleLogin = async () => {
        console.log('username: ' , this.state.username , 'password: ' , this.state.password); 
    }

    handleShowHidePassword() {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username:</label>
                            <input type="text" className="form-control" placeholder="Enter your username" value={this.state.username} onChange={(event) => this.handleOnChangeUserName(event)}/>
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <div className='custom-input-password'>
                             <input type={this.state.isShowPassword ? 'text' : 'password'} className="form-control" placeholder="Enter your password" onChange={(event) => this.handleOnChangePassword(event)} />
                             <span onClick={() => this.handleShowHidePassword()}>
                                <i class={this.state.isShowPassword ? 'far fa-eye' : 'fa-solid fa-eye-slash'}></i>
                             </span>
                             
                            </div>
                        </div>
                        <div>
                            <button className="col-12 btn-login" onClick={() => {this.handleLogin()}}>Login</button>
                        </div>
                        <div className="col-12">
                            <span className="forgot-password">Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className="text-other-login">Or login with:</span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fa-brands fa-google-plus google"></i>
                            <i className="fa-brands fa-facebook facebook"></i>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
