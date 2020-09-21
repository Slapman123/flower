import React from "react";
import { setup } from "../../../utils/setup";

const ResetPassForm = () => {
  return (
    <div className="login-page">
      <div className="login-content">
        <form className="login-form">
          <div className="input-holder">
            <input
              type="text"
              id="username"
              placeholder="Email"
              name="username"
              autoComplete="off"
            />
          </div>
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default setup(ResetPassForm);
