import React from 'react';
import PropTypes from 'prop-types';

import './WhiteCard.css';

function WhiteCard(props) {
  const {
    title, subTitle, list,
  } = props;
  return (
    <div className="container-div_whitecard">
      <div
        className="header-div_whitecard"
      >
        <h2>{`${title}`}</h2>
        <h3>{`R$ ${subTitle}`}</h3>
      </div>
      <div className="footer-div_whitecard">
        <table>
          <tr className="tableheader-tr_foorterwhitecard">
            <th>Clube</th>
            <th>Clientes</th>
            <th>Preço</th>
          </tr>
          {list && list.map((element) => (
            <tr>
              <td>{element.clube}</td>
              <td>{element.clientes}</td>
              <td>{element.preco}</td>
            </tr>
          ))}

        </table>
      </div>
    </div>
  );
}

WhiteCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    clube: PropTypes.string.isRequired,
    clientes: PropTypes.string.isRequired,
    preco: PropTypes.string.isRequired,
  })).isRequired,
};

export default WhiteCard;
