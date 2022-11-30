import React from 'react';
import './Dashboard.css';

import PillField from '../../components/molecules/pillField/PillField';
import Input from '../../components/atoms/inputs/Input';

function Dashboard() {
  return (
    <div className="container-div_dashboard">
      <div className="header-div_dashboard">
        <div className="leftHeader-div_dashboard">
          <div>
            <p className="text-p_PillField">Principal / Dashboard</p>
            <h1 className="title-h1_dashboard">Velty Dashboard</h1>
          </div>
          <PillField
            width="33.5vw"
            minWidth="434.7px"
          >
            <p className="text-p_PillField">Filtrar por data</p>
            <Input
              image="date"
              type="date"
              placeholder="Data inicial"
            />
            <Input
              image="date"
              type="date"
              placeholder="Data final"
            />
          </PillField>
        </div>
        <div className="rightHeader-div_dashboard">
          <PillField
            width="22vw"
            minWidth="285px"
          >
            <Input
              image="search"
              placeholder="Busca"
            />
            <img
      // eslint-disable-next-line global-require
              src={require('../../assets/images/bell.png')}
              alt="logo for notification"
              width="12px"
              height="12px"
            />
            <img
      // eslint-disable-next-line global-require
              src={require('../../assets/images/moon.png')}
              alt="logo for mode"
              width="12px"
              height="12px"
            />
            <img
      // eslint-disable-next-line global-require
              src={require('../../assets/images/inter.png')}
              alt="logo for infomation"
              width="12px"
              height="12px"
            />
            <div className="image-div_PillField">
              <img
      // eslint-disable-next-line global-require
                src={require('../../assets/images/person.png')}
                alt="logo for notification"
                width="41px"
                height="41px"
              />
            </div>
          </PillField>
        </div>
      </div>
      <div className="body-div_dashboard" />
    </div>
  );
}

export default Dashboard;
