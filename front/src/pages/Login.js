import React, { Component } from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                <div class="main">

                    {/*<!-- Sing in  Form -->*/}
                    <section class="sign-in">
                        <div class="container">
                            <div class="signin-content">
                                <div class="signin-form">
                                    {/*<center>*/}
                    <img alt="Logo" src="assets\img\cardBe.png" width="200" height="100"/>
                {/*</center>*/}
                                    <h3 class="form-subtitle">Get it real!</h3>
                                    <form method="POST" class="register-form" id="login-form">
                                        <div class="form-group">
                                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                                            <input type="email" name="email" id="email" placeholder="Your Email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                            <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                                        </div>
                                        <div class="form-group">
                                            <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                            <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                                        </div>
                                        <div class="form-group form-button">
                                            <a href="home.html" type="submit" name="signin" id="signin" class="form-submit" >Log in</a>
                                        </div>
                                    </form>
                                    <a href="forgot-password.html" class="signup-image-link">Forgot Password?</a>
                                    <div class="social-login">
                                        <span class="social-label">New here?  </span>
                                        <a href="sign-up" class="signup-image-link">Create an account</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
export default Login