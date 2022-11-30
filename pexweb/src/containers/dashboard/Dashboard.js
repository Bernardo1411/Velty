import React from 'react';
import './Dashboard.css';

import PillField from '../../components/molecules/pillField/PillField';

function Dashboard() {
  return (
    <div className="container-div_dashboard">
      <div className="header-div_dashboard">
        <PillField />
      </div>
      <div className="body-div_dashboard" />
    </div>
  );
}

export default Dashboard;
