let defaultState = {
  currentPage: "home",
  orcamentoAtivo: 0,
  socket: {},
  sideBar: false,
  loading: false,
  saving: false,
  errors: { login: false, pedidoMinimo: false },
  modals: {
    criarOrcamentoBranco: false,
    criarOrcamentoVnda: { show: false, id: 0 },
    instrucoes: false,
    novoProduto: false,
  },
};
const reducerConfig = (state = defaultState, action) => {
  let { type, ...rest } = action;
  switch (type) {
    case "CHANGEORCAMENTOATIVO":
      rest.orcamentoAtivo = parseInt(action.orcamentoAtivo);
      return { ...state, ...rest };
    case "CHANGEPAGE":
      return { ...state, ...rest };
    case "ADDSOCKET":
      return { ...state, ...rest };
    case "TOGGLESIDEBAR":
      return { ...state, ...rest };
    case "TOGGLELOADING":
      return { ...state, ...rest };
    case "TOGGLESAVING":
      return { ...state, ...rest };

    case "TOGGLEERROR":
      state.errors = { ...state.errors, ...rest.errors };
      return { ...state, ...rest };

    case "TOGGLEMODAL":
      let modals = { ...state.modals, ...rest.modal };
      return { ...state, modals };

    default:
      return state;
  }
};
export default reducerConfig;
