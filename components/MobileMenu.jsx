import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Menu = props => (
  <div>
    <div className="overlay" />
    <div className="mobile-menu-wrapper {visibility}">
      <ul className="mobile-menu">
        <li>
          <a className="mobile-menu-link-dropdown" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="mobile-menu-link-dropdown" href="/blog">
            Blog
          </a>
        </li>
        <li>
          <a className="mobile-menu-link-dropdown" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Menu;
