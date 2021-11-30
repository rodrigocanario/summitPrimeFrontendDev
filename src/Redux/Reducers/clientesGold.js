const reducerClientesGold = (
  state = {
    headers: {
      valorAno: 10000,
      valorMes: 5000,
      skuAno: 100,
      skuMes: 50,
      vezesAno: 4,
    },
    data: {},
    dataCrua: [],
  },
  action
) => {
  switch (action.type) {
    case "UPDATEHEADERS":
      return {
        ...state,
        headers: { ...state.headers, [action.header]: action.headerValue },
      };

    case "UPDATEDATA":
      return { ...state, data: action.data };
    case "UPDATEDATACRUA":
      return { ...state, dataCrua: action.dataCrua };

    default:
      return state;
  }
};
export default reducerClientesGold;
