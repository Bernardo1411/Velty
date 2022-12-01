// eslint-disable-file no-use-before-define
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Dashboard.css';

import getFinanceDataAction from '../../store/Actions/financeAction';

import PillField from '../../components/molecules/pillField/PillField';
import Input from '../../components/atoms/inputs/Input';
import CardColor from '../../components/molecules/cardColor/CardColor';
import WhiteCard from '../../components/molecules/whiteCards/WhiteCard';
import SmallCard from '../../components/molecules/smallCard/SmallCard';
import VerySmallCard from '../../components/molecules/verySmallCard/VerySmallCard';
import { ReactComponent as BellSVG } from '../../assets/images/bell.svg';
import { ReactComponent as MoonSVG } from '../../assets/images/moon.svg';
import { ReactComponent as InfoSVG } from '../../assets/images/info.svg';

function Dashboard() {
  const financeData = useSelector((state) => state.finance.financeData);
  const dispatch = useDispatch();

  const [financeState, setFinanceState] = useState({});

  useEffect(() => {
    setFinanceState(financeData);
  }, [financeData]);

  useEffect(() => {
    dispatch(getFinanceDataAction());
  }, []);

  return (
    <div className="container-div_dashboard">
      <div className="header-div_dashboard">
        <div className="leftHeader-div_dashboard">
          <div>
            <p className="text-p_PillField">Principal / Dashboard</p>
            <h1 className="title-h1_dashboard">Velty Dashboard</h1>
          </div>
          <PillField
            width="90%"
            minWidth="405px"
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
            width="70%"
            minWidth="285px"
          >
            <Input
              image="search"
              placeholder="Busca"
            />
            <BellSVG
              width="15px"
              height="19px"
            />
            <MoonSVG
              width="16px"
              height="18px"
            />
            <InfoSVG
              width="20px"
              height="20px"
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
      <div className="body-div_dashboard">
        <div>
          <CardColor
            total={financeState.receitaTotal}
            totalTitle="Receita Total"
            average={financeState.receitaTotalAvg}
            color="colorRed"
          />
          <CardColor
            total={financeState.lucroTotal}
            totalTitle="Lucro Total"
            average={financeState.lucroTotalAvg}
            color="colorBlue"
          />
          <CardColor
            total={financeState.lucroVenda}
            totalTitle="Lucro por venda"
            average={financeState.lucroVendaAvg}
            color="colorGreen"
          />
        </div>
        <div>
          {
            financeState.clientes && financeState.clientes.map((cliente) => (
              <VerySmallCard
                key={cliente.totalTitle}
                total={cliente.value}
                totalTitle={cliente.totalTitle}
                percentBalance={cliente.percentVar}
              />
            ))
}
        </div>
        <div>
          {
            financeState.cotas && financeState.cotas.map((cota) => (
              <SmallCard
                key={cota.totalTitle}
                total={cota.value}
                totalTitle={cota.totalTitle}
                percentBalance={cota.percentVar}
              />
            ))
}
        </div>
        <div>
          <WhiteCard
            title="Planos"
            subTitle="123 planos ativos"
            list={[
              {
                clube: 'Estagiários',
                clientes: '312',
                preco: '123,90',
              },
              {
                clube: 'Estagiários',
                clientes: '312',
                preco: '123,90',
              },
              {
                clube: 'Estagiários',
                clientes: '312',
                preco: '123,90',
              },
              {
                clube: 'Estagiários',
                clientes: '312',
                preco: '123,90',
              },
            ]}
          />
          <WhiteCard
            title="Categorias"
            subTitle="4 categorias em uso"
            list={[
              {
                clube: 'Estagiários',
                clientes: '312',
                preco: '123,90',
              },
              {
                clube: 'Estagiários',
                clientes: '312',
                preco: '123,90',
              },
              {
                clube: 'Estagiários',
                clientes: '312',
                preco: '123,90',
              },
              {
                clube: 'Estagiários',
                clientes: '312',
                preco: '123,90',
              },
            ]}
          />
          <WhiteCard
            title="Tipos de planos"
            subTitle="2 tipos em uso"
            list={[
              {
                clube: 'Estagiários',
                clientes: '312',
                preco: '123,90',
              },
              {
                clube: 'Estagiários',
                clientes: '312',
                preco: '123,90',
              },
              {
                clube: 'Estagiários',
                clientes: '312',
                preco: '123,90',
              },
              {
                clube: 'Estagiários',
                clientes: '312',
                preco: '123,90',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
