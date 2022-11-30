import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

function Input(props) {
  const { image, type, placeholder } = props;

  const [typeState, setTypeState] = useState('text');

  return (
    <div className="container-div_input">
      <img
      // eslint-disable-next-line global-require, import/no-dynamic-require
        src={require(`../../../assets/images/${image}.png`)}
        alt="logo for date input"
        width="12px"
        height="12px"
      />
      {
      type === 'date' ? (
        <input
          className="input-input_input"
          type={typeState}
          onFocus={() => setTypeState('date')}
          onBlur={() => setTypeState('text')}
          placeholder={placeholder}
        />
      ) : (
        <input
          className="input-input_input"
          type={type}
          placeholder={placeholder}
        />
      )
      }
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  image: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
