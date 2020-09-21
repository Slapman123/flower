import React from "react";
import { setup } from "../../utils/setup";
import { Link } from "react-router-dom";

const SignPage = ({ actions, helpers }) => {
  return (
    <div className="scb-welcome-container">
      <h2 className="text-center">JETZT BEI mySCB registrieren und deine Saisonkarte(n) aktivieren!</h2>
      <div className="justify-center">
        <Link to="registration">
          <button>Jetzt registrieren!</button>
        </Link>
        <Link to="/login">
          <button>Jetzt einloggen!</button>
        </Link>
      </div>
    </div>
  );
};

export default setup(SignPage);
