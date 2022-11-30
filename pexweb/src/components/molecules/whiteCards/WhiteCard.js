import React from 'react';
import PropTypes from 'prop-types';

import './WhiteCard.css';

function WhiteCard(props) {
  const {
    title, average, subTitle,
  } = props;
  return (
    <div className="container-div_whitecard">
      <div
        className="header-div_whitecard"
      >
        <h2>{`R$ ${title}`}</h2>
        <h3>{`R$ ${subTitle}`}</h3>
      </div>
      <div className="footer-div_whitecard">
        <h3>{`R$ ${average}`}</h3>
        <p>Média por cliente</p>
      </div>
    </div>
  );
}

WhiteCard.propTypes = {
  title: PropTypes.string.isRequired,
  average: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default WhiteCard;
