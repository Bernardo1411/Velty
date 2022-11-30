import React from 'react';
import PropTypes from 'prop-types';

import './CardColor.css';

function CardColor(props) {
  const {
    total, average, totalTitle, color,
  } = props;
  return (
    <div className={`container-div_cardcolor ${color}`}>
      <div
        className="header-div_cardcolor"
      >
        <img
      // eslint-disable-next-line global-require, import/no-dynamic-require
          src={require(`../../../assets/images/${color}.png`)}
          alt="logo for date input"
          width="56px"
          height="56px"
        />
        <h2>{`R$ ${total}`}</h2>
        <h3>{`R$ ${totalTitle}`}</h3>
      </div>
      <div className="footer-div_cardcolor">
        <h3>{`R$ ${average}`}</h3>
        <p>Média por cliente</p>
      </div>
    </div>
  );
}

CardColor.propTypes = {
  total: PropTypes.string.isRequired,
  average: PropTypes.string.isRequired,
  totalTitle: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CardColor;
