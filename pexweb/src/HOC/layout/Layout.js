import React from 'react';
import PropTypes from 'prop-types';

import './Layout.css';

import NavBar from '../../components/molecules/navBar/NavBar';

function Layout(props) {
  const { children } = props;

  return (
    <div className="layout">
      <NavBar />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default Layout;
