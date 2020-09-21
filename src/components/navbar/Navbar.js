import React from "react";
import setup from "../../utils/setup";
import bear from "../../media/nav/MySCB_reduced_grey.svg";
import coins from "../../media/nav/Coins.svg";
import basket from "../../media/nav/Basket_black.svg";
import stars from "../../media/nav/List_stars_black.svg";
import info from "../../media/nav/Info_black.svg";
import profile from "../../media/nav/Person_black.svg";
import { NavLink } from "react-router-dom";

const nav = [
  { icon: bear, link: "/baerometer" },
  { icon: coins, link: "/shop" },
  { icon: basket, link: "/rewards" },
  { icon: stars, link: "/rankings" },
  { icon: info, link: "/info" },
  { icon: profile, link: "/profile" },
];

const Navbar = ({ actions }) => {
  return (
    <div className="scb-navbar" onClick={actions.app.closeModal}>
      <ul className="scb-nav-list">
        {nav.map((item, i) => (
          <NavLink
            activeClassName="nav-active"
            className="scb-list"
            to={item.link}
            key={i}
          >
            <li className="scb-list">
              <img src={item.icon} alt="item.icon" />
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default setup(Navbar);
