import PropTypes from "prop-types";

const Menu = props => (
  <div className="menu-wrapper triangle">
    <ul className="menu">
      <li>
        <a href="/" className="menu-a-dropdown" >
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="menu-a-dropdown">
          About
        </a>
      </li>
      <li>
        <a href="/blog" className="menu-a-dropdown" >
          Blog
        </a>
      </li>
    </ul>
  </div>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Menu;
