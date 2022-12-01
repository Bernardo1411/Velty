import React from 'react';
import PropTypes from 'prop-types';

import './VerySmallCard.css';

function VerySmallCard(props) {
  const {
    total, percentBalance, totalTitle,
  } = props;

  const percentBalanceSignal = percentBalance[0];

  return (
    <div
      className="container-div_verysmallcard"
    >
      <h3>{`${totalTitle}`}</h3>
      <h2>{`${total}`}</h2>

      <p style={{
        color: percentBalanceSignal === '-' ? '#CD0505' : '#05CD99',
      }}
      >
        {`${percentBalance}%`}

      </p>
    </div>
  );
}

VerySmallCard.propTypes = {
  total: PropTypes.string.isRequired,
  percentBalance: PropTypes.string.isRequired,
  totalTitle: PropTypes.string.isRequired,
};

export default VerySmallCard;
