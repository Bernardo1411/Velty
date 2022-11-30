import React from 'react';
import PropTypes from 'prop-types';

import './PillField.css';

function PillField(props) {
  const { children } = props;

  return (
    <div className="container-div_pillField
"
    >
      {children}
      <p>teste</p>
    </div>
  );
}

PillField.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default PillField;
