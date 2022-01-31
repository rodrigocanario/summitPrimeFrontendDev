let defaultState = {
  userInfo: {},
  produtos: [],
  orcamentosPrime: [],
  orcamentosVnda: [],
};

const reducerDatabank = (state = defaultState, action) => {
  switch (action.type) {
    case "RESET":
      return defaultState;

    case "UPDATEDATABANK":
      return { ...state, ...action.input };
    case "UPDATEORCAMENTOPRIME":
      state.orcamentosPrime[action.indexOrcamento] = action.orcamento;
      return { ...state, orcamentosPrime: [...state.orcamentosPrime] };
    case "ADDORCAMENTO":
      state.orcamentosPrime = [...state.orcamentosPrime, action.orcamento];
      return { ...state };
    case "DELETEORCAMENTO":
      return {
        ...state,
        orcamentosPrime: [
          ...state.orcamentosPrime.slice(0, action.indexOrcamento),
          ...state.orcamentosPrime.slice(action.indexOrcamento + 1),
        ],
      };

    default:
      return state;
  }
};
export default reducerDatabank;
