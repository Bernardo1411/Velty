import React from 'react';
import PropTypes from 'prop-types';

import './VerySmallCard.css';

function VerySmallCard(props) {
  const {
    total, percentBalance, totalTitle,
  } = props;

  return (
    <div
      className="container-div_verysmallcard"
    >
      <h3>{`R$ ${totalTitle}`}</h3>
      <h2>{`R$ ${total}`}</h2>

      <p>{`${percentBalance}%`}</p>
    </div>
  );
}

VerySmallCard.propTypes = {
  total: PropTypes.string.isRequired,
  percentBalance: PropTypes.string.isRequired,
  totalTitle: PropTypes.string.isRequired,
};

export default VerySmallCard;
