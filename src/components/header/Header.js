import React from "react";
import setup from "../../utils/setup";
import logo from "../../media/logo.png";

const Header = ({helpers, actions}) => {
 
  return (
    <div className="flex-center justify-around header-container">
     <div className="left-nav-section">
       <img src={logo} alt="logo" />
     </div>
     <div className="flex-center right-nav-section">
       <div className="justify-around nav-section">
         <ul className="flex-center justify-around">
           <li>Flowers</li>
           <li>Latest Sightings</li>
           <li>Favorites</li>
           <>
           <li className="login">Login</li>
           <li className="registrate">New account</li>
           </>
         </ul>
       {/* <div className="login-registration-section"> */}
        {/* <span className="login">Login</span>
        <button className="registrate">New account</button> */}
       {/* </div> */}
       </div>
     </div>
    </div>
  );
};

export default setup(Header);
