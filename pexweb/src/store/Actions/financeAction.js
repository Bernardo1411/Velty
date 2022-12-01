import { getFinanceData, setLoaded, setLoading } from '../Slices/financeSlice';

export default function getFinanceDataAction() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setLoaded(false));
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            receita: [
              {
                value: '312.321,00',
                avg: '67,20',
                totalTitle: 'Receita Total',
                color: 'colorRed',
              },
              {
                value: '74.421,00',
                avg: '42,30',
                totalTitle: 'Lucro Total',
                color: 'colorBlue',
              },
              {
                value: '3,12',
                avg: '12,40',
                totalTitle: 'Lucro por venda',
                color: 'colorGreen',
              },
            ],
            clientes: [
              {
                value: '12',
                percentVar: '+15,3% (+2)',
                totalTitle: 'Clientes ativos',
              },
              {
                value: '42',
                percentVar: '+42,6% (+8)',
                totalTitle: 'Novos Clientes',
              },
              {
                value: '142,32',
                percentVar: '-22,6% (+12,20)',
                totalTitle: 'Clientes adicionados',
              },
              {
                value: '24,3%',
                percentVar: '+42,6% (+3)',
                totalTitle: 'LTV',
              },
              {
                value: '52,42%',
                percentVar: '+32,6% (+6)',
                totalTitle: 'Turnover',
              },
              {
                value: '54,42%',
                percentVar: '+32,6% (+6)',
                totalTitle: 'Turnover recuperado',
              },
            ],
            cotas: [
              {
                value: '312.321',
                percentVar: '+15,3% (+226)',
                totalTitle: 'Cotações realizadas',
              },
              {
                value: '212.012',
                percentVar: '+15,3% (+226)',
                totalTitle: 'Vendas finalizadas',
              },
              {
                value: '212.012',
                percentVar: '+15,3% (+223)',
                totalTitle: 'Cotações concluídas',
              },
              {
                value: '3.122',
                percentVar: '+15,3% (+223)',
                totalTitle: 'Cotações não respondidas',
              },
            ],
          });
        }, 2000);
      });

      if (!data) {
        dispatch(setLoading(false));
        dispatch(setLoaded(false));
        throw new Error('Falha!');
      }

      dispatch(setLoading(false));
      dispatch(setLoaded(true));
      dispatch(getFinanceData(data));
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(setLoaded(false));
    }
  };
}
