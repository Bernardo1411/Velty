import React from 'react';
import PropTypes from 'prop-types';

import './SmallCard.css';

function SmallCard(props) {
  const {
    total, percentBalance, totalTitle,
  } = props;

  return (
    <div
      className="container-div_smallcard"
    >
      <img
      // eslint-disable-next-line global-require
        src={require('../../../assets/images/colorBlue.png')}
        alt="logo for date input"
        width="56px"
        height="56px"
      />
      <h2>{`R$ ${total}`}</h2>
      <h3>{`R$ ${totalTitle}`}</h3>

      <p>{`${percentBalance}%`}</p>
    </div>
  );
}

SmallCard.propTypes = {
  total: PropTypes.string.isRequired,
  percentBalance: PropTypes.string.isRequired,
  totalTitle: PropTypes.string.isRequired,
};

export default SmallCard;
