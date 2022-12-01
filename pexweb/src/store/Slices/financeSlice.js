import { createSlice } from '@reduxjs/toolkit';

export const financeSlice = createSlice({
  name: 'data',
  initialState: {
    financeData: {
      receita: [
        {
          value: '0',
          avg: '0',
          totalTitle: 'Receita Total',
          color: 'colorRed',
        },
        {
          value: '0',
          avg: '0',
          totalTitle: 'Lucro Total',
          color: 'colorBlue',
        },
        {
          value: '0',
          avg: '0',
          totalTitle: 'Lucro por venda',
          color: 'colorGreen',
        },
      ],
      clientes: [
        {
          value: '0',
          percentVar: '',
          totalTitle: 'Clientes ativos',
        },
        {
          value: '0',
          percentVar: '',
          totalTitle: 'Novos Clientes',
        },
        {
          value: '0',
          percentVar: '',
          totalTitle: 'Clientes adicionados',
        },
        {
          value: '0',
          percentVar: '',
          totalTitle: 'LTV',
        },
        {
          value: '',
          percentVar: '',
          totalTitle: 'Turnover',
        },
        {
          value: '',
          percentVar: '',
          totalTitle: 'Turnover recuperado',
        },
      ],
      cotas: [
        {
          value: '0',
          percentVar: '',
          totalTitle: 'Cotações realizadas',
        },
        {
          value: '0',
          percentVar: '',
          totalTitle: 'Vendas finalizadas',
        },
        {
          value: '0',
          percentVar: '',
          totalTitle: 'Cotações concluídas',
        },
        {
          value: '0',
          percentVar: '',
          totalTitle: 'Cotações não respondidas',
        },
      ],
    },
    loadingData: false,
    loadedData: false,
  },
  reducers: {
    getFinanceData(state, action) {
      state.financeData = action.payload;
    },
    setLoaded(state, action) {
      state.loadedData = action.payload;
    },
    setLoading(state, action) {
      state.loadingData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getFinanceData, setLoaded, setLoading } = financeSlice.actions;

export default financeSlice.reducer;
