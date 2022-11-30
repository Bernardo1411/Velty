import React from 'react';
import './Dashboard.css';

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
            total="312.321,00"
            totalTitle="Receita Total"
            average="67,20"
            color="colorRed"
          />
          <CardColor
            total="74.421,00"
            totalTitle="Lucro Total"
            average="42,30"
            color="colorBlue"
          />
          <CardColor
            total="3,12"
            totalTitle="Lucro por venda"
            average="12,40"
            color="colorGreen"
          />
        </div>
        <div>
          <VerySmallCard
            total="3.312"
            totalTitle="Clientes ativos"
            percentBalance="+15,3% (+223)"
          />
          <VerySmallCard
            total="3.312"
            totalTitle="Novos clientes"
            percentBalance="+15,3% (+223)"
          />
          <VerySmallCard
            total="3.312"
            totalTitle="Clientes adicionados"
            percentBalance="+15,3% (+223)"
          />
          <VerySmallCard
            total="3.312"
            totalTitle="LTV"
            percentBalance="+15,3% (+223)"
          />
          <VerySmallCard
            total="3.312"
            totalTitle="Turnover"
            percentBalance="+15,3% (+223)"
          />
          <VerySmallCard
            total="3.312"
            totalTitle="Turnover recuperado"
            percentBalance="+15,3% (+223)"
          />
        </div>
        <div>
          <SmallCard
            total="321.321"
            totalTitle="Cotações realizadas"
            percentBalance="+15,3% (+223)"
          />
          <SmallCard
            total="321.321"
            totalTitle="Vendas finalizadas"
            percentBalance="+15,3% (+223)"
          />
          <SmallCard
            total="321.321"
            totalTitle="Cotações concluídas"
            percentBalance="+15,3% (+223)"
          />
          <SmallCard
            total="321.321"
            totalTitle="Cotações não respondidas"
            percentBalance="+15,3% (+223)"
          />
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
