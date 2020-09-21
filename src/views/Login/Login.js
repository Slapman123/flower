import React from "react";
import { setup } from "../../utils/setup";

const LoginPage = ({ actions, helpers }) => {
  return (
    <div className="login-page">
      <div className="container">
        {!helpers.auth.isLoggedIn ? (
          <form>
            <div className="login-content">
              <div className="login-top">
                
                <h3>
                  MySCB <br /> Admin Panel
                </h3>
              </div>
              <div className="login-form">
                <div className="input-holder">
                  <input
                    type="email"
                    name="email"
                    defaultValue={helpers.login.user.email}
                    onChange={actions.login.handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="input-holder">
                  <input
                    type="password"
                    name="password"
                    defaultValue={helpers.login.user.password}
                    onChange={actions.login.handleChange}
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              {/* {!forgotPassword ?  */}
              <div>
                {/* <LoginForm/> */}
              </div>

              <div>
                {/* <ResetPassForm/> */}
                <div className="login-bottom">
                  <button type="submit" className="scb-btn-style" onClick={actions.auth.submitLoginForm}>
                    Submit
                  </button>
                </div>
              </div>
              {/* } */}
            </div>
          </form>
        ) : (
          <div>
            {/* <h1 style={{color: "white"}}>Welcome {helpers.app.user}</h1> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default setup(LoginPage);
