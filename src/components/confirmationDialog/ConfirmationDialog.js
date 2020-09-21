import React from "react";
import PropTypes from "prop-types";
import setup from "../../utils/setup";

const ConfirmationDialog = (props) => {
  const { helpers, actions, id, route } = props;

  return (
    <div>
      {helpers.app.isConfirmationDialogOpen ? (
        <div className="overlay">
          <div className="dialog">
            <div className="align-center dialog-header confirmation-dialog">
              <span>Are you sure you want do delete?</span>
              <button
                className="close-button"
                onClick={actions.app.closeConfirmationDialog}
              >
                X
              </button>
            </div>
            <div className="flex justify-around buttons-wrap">
              <button onClick={ () => actions.app.delete(route, id)}>Yes</button>
              <button onClick={actions.app.closeConfirmationDialog}>Cancel</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

ConfirmationDialog.propTypes = {
  helpers: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default setup(ConfirmationDialog);
