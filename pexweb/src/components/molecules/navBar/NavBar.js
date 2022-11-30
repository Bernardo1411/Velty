import React from 'react';

import './NavBar.css';

import NavItens from '../../atoms/navItens/NavItens';
import { ReactComponent as PexSVG } from '../../../assets/images/pex.svg';
import { ReactComponent as HomeSVG } from '../../../assets/images/home.svg';
import { ReactComponent as CartSVG } from '../../../assets/images/cart.svg';
import { ReactComponent as SheetsSVG } from '../../../assets/images/sheets.svg';
import { ReactComponent as PartnerSVG } from '../../../assets/images/partner.svg';
import { ReactComponent as ClienteSVG } from '../../../assets/images/cliente.svg';

function NavBar() {
  return (
    <div className="navbar">
      <PexSVG />
      <nav>
        <ul>
          <NavItens
            link="/"
            logo={(
              <HomeSVG />
)}
            title="Dashboard"
          />
          <NavItens
            link="/vendas"
            logo={<CartSVG />}
            title="Vendas"
          />
          <NavItens
            link="/relatorios"
            logo={<SheetsSVG />}
            title="Relatórios"
          />
          <NavItens
            link="/lojas"
            logo={<PartnerSVG />}
            title="Lojas parceiras"
          />
          <NavItens
            link="clientes"
            logo={<ClienteSVG />}
            title="Clientes"
          />
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
