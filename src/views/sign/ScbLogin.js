import React from "react";
import { setup } from "../../utils/setup";

const ScbLogin = () => {
  return (
    <div className="scb-welcome-container">
      <h2>Login my.scb.ch</h2>
      <div className="flex-column">
        <label>Email-Adresse*</label> 
        <input type="text" name="email" />
      </div>
      <div className="flex-column">
        <label>Passwort*</label> <br/>
        <input type="password" name="password" />
      </div>
      <button>Login!</button>
    </div>
  );
};

export default setup(ScbLogin);
