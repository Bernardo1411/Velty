import React from 'react';
import PropTypes from 'prop-types';

import './PillField.css';

function PillField(props) {
  const { children, width, minWidth } = props;

  return (
    <div
      className="container-div_pillField
"
      style={{ width, minWidth }}
    >
      {children}
    </div>
  );
}

PillField.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  width: PropTypes.string.isRequired,
  minWidth: PropTypes.string.isRequired,
};

export default PillField;
