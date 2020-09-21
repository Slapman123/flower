import React from "react";
import PropTypes from "prop-types";
import setup from "../../utils/setup";
import { toJS } from "mobx";

const Spinner = (props) => {
  const { helpers, actions } = props;
  // console.log(editable);
  return (
    <div style={{position: "absolute", width: "100vw", height: "100vh", left: 0, right: 0, top: 0}}>{helpers.app.isLoading ? <div className="loader"></div> : ""}</div>
  );
};

Spinner.propTypes = {
  helpers: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default setup(Spinner);
