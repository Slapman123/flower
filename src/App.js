import React from "react";
import "./styles/styles.scss";
import "./App.css";
import PropTypes from "prop-types";
import { setup } from "./utils/setup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/Home/Home";

const App = ({ helpers }) => {
  return (
    <div className="flex-column-center">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

App.propTypes = {
  state: PropTypes.object,
};

export default setup(App);
