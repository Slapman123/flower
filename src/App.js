import React from "react";
import "./styles/styles.scss";
import "./App.css";
import PropTypes from "prop-types";
import { setup } from "./utils/setup";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


const App = ({ helpers }) => {
  return (
    <div
      className={helpers.app.isAjaxInProgress ? "loading" : ""}
      // style={{ marginTop: "50px" }}
    >
      <h1 style={{color: "white"}}>zzzzzzzzzzzzzz</h1>
      <Router>
        <Switch>
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/welcome" component={Welcome} /> */}
      
        </Switch>
      {/* {!helpers.auth.isLoggedIn ? <Redirect to="/login" /> : ""} */}
      </Router>
    </div>
  );
};

App.propTypes = {
  state: PropTypes.object,
};

export default setup(App);
