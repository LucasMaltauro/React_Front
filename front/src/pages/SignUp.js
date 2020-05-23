import React from "react";

class SignUp extends React.Component {
  render() {
    return (
      <div className="main">
        {}
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email" />
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email" />
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Repeat your e-mail"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nickname"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass">
                      <i className="zmdi zmdi-lock" />
                    </label>
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span>
                        <span />
                      </span>
                      I agree all statements in{" "}
                      <a href="terms" className="term-service">
                        Terms of service
                      </a>
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <a
                      href="/"
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                    >
                      Register
                    </a>
                    <a href="/" className="signup-image-link">
                      I am already member
                    </a>
                  </div>
                </form>
              </div>
              {}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SignUp;
