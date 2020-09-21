import React from "react";
import setup from "../../utils/setup";


const Header = ({helpers, actions}) => {
 
  return (
    <div className="header justify-between align-center">
      <div className="flex-center">
      <span>myScb / Admin</span>
        </div>      
        <div style={{paddingRight: "40px"}}>
          {/* {helpers.app.user} */}
          <button className="scb-btn-style" onClick={ () => console.log("asda")}>Logout</button>
        </div>
    </div>
  );
};

export default setup(Header);
