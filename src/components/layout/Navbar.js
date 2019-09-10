import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className={icon}>
      <h1>
        <i className='fab fa-github' /> {""}
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  icon: "navbar bg-primary",
  title: "Github Finder"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
