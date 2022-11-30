import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './NavItens.css';

function NavItens(props) {
  const { title, logo, link } = props;

  return (
    <li className="navitens">
      <span className="logo-span_navitens">
        {logo}
      </span>
      <NavLink
        to={link}
        className="navlink-navitens"
      >
        {title}
      </NavLink>
    </li>
  );
}

NavItens.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  link: PropTypes.string.isRequired,
};

export default NavItens;
