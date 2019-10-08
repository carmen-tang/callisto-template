import PropTypes from "prop-types";

const Footer = props => (
  <div id="footer">
    {/* logo */}
    <div className="logo-trademark">
    </div>
    {/* social */}
    <div className="social footer-item">
      <h4 className="remove-tablet">Social</h4>
      <ul>
        <li>
          <a href="">twitter</a>
        </li>
        <li>
          <a href="">fb</a>
        </li>
        <li>
          <a href="">linkedin</a>
        </li>
        <li>
          <a href="">instagram</a>
        </li>
      </ul>
    </div> 
  </div>
);

Footer.propTypes = {
  // onToggleMenu: PropTypes.func
};

export default Footer;
