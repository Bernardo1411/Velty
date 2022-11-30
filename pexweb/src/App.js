import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Dashboard from './containers/dashboard/Dashboard';
import RandomPage from './containers/randomPage/RandomPage';
import Layout from './HOC/layout/Layout';

function App() {
  return (
    <Layout>
      <div className="App">
        <Routes>
          <Route path="/vendas" element={<RandomPage />} />
          <Route path="/relatorios" element={<RandomPage />} />
          <Route path="/lojas" element={<RandomPage />} />
          <Route path="/clientes" element={<RandomPage />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
