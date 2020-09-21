import React from "react";
import PropTypes from "prop-types";
import setup from "../../utils/setup";

const Modal = (props) => {
  const { helpers, actions, editable, user, stateName } = props;
  // console.log(editable);
  return (
    <div>
      {helpers.app.isDialogOpen ? (
        <div className="overlay">
          <div className="dialog">
            <div className="align-center dialog-header">
              <span>Edit</span>
              <button
                className="close-button"
                onClick={actions.app.closeDialog}
              >
                X
              </button>
            </div>
            <div className="input-wrapper">
              {editable.map((id, i) => (
                <div key={i}>
                  <label htmlFor={id.name} className="label-style">
                    {id.name}
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    id={id.name}
                    name={id.name}
                    defaultValue={helpers.app.selectedUser[id.name]}
                    onChange={  actions.app.handleSelectedUserChange}
                  />
                </div>
              ))}
            </div>
              <div className="button-wrapper">
                <button onClick={ () => actions[stateName].updateData(user.id)}>Save</button>
              </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

Modal.propTypes = {
  helpers: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default setup(Modal);
