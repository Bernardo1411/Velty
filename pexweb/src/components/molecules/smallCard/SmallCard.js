import React from 'react';
import PropTypes from 'prop-types';

import './SmallCard.css';

import { ReactComponent as MoneySVG } from '../../../assets/images/money.svg';

function SmallCard(props) {
  const {
    total, percentBalance, totalTitle,
  } = props;

  const percentBalanceSignal = percentBalance[0];

  return (
    <div
      className="container-div_smallcard"
    >
      <MoneySVG
        width="56px"
        height="56px"
      />
      <h2>{`R$ ${total}`}</h2>
      <h3>{`R$ ${totalTitle}`}</h3>

      <p
        style={{
          color: percentBalanceSignal === '-' ? '#CD0505' : '#05CD99',
        }}
      >
        {`${percentBalance}%`}

      </p>
    </div>
  );
}

SmallCard.propTypes = {
  total: PropTypes.string.isRequired,
  percentBalance: PropTypes.string.isRequired,
  totalTitle: PropTypes.string.isRequired,
};

export default SmallCard;
