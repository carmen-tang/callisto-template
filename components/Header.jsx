import React, { Component } from "react";
import PropTypes from "prop-types";
import Menu from "../components/Menu";
import MobileMenu from "../components/MobileMenu";

const chevron = require("../static/chevron-down-solid.svg");

class Header extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      showMobileMenu: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  toggleMobileMenu = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  };

  render() {
    return (
      <header id="header">
        <nav>
          <a className="about" href="/about">
            About
          </a>
          <a className="blog" href="/blog">
            Blog
          </a>
          <a className="menu-link" onClick={this.toggleMenu}>
            Menu <img src={chevron} className="chevron" />
          </a>

          <div className="mobile-menu" onClick={this.toggleMobileMenu}>
            <div className="line top" />
            <div className="line center" />
            <div className="line bottom" />
          </div>
        </nav>

        {this.state.showMenu && <Menu />}
        {this.state.showMobileMenu && <MobileMenu />}
      </header>
    );
  }
}

Header.propTypes = {
  toggleMenu: PropTypes.func
};

export default Header;
