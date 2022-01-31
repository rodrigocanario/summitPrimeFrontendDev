let defaultState = {
  filtros: {},
  produtosAtivos: [],
  ordens: [
    { name: "A-Z", value: "nomeAZ", active: false },
    { name: "Z-A", value: "nomeZA", active: false },
    { name: "Preco (cresente)", value: "precoCrescente", active: false },
    { name: "Preco (decrescente)", value: "precoDecresente", active: false },
  ],
};
const reducerLoja = (state = defaultState, action) => {
  switch (action.type) {
    case "SETFILTROS":
      return {
        ...state,
        filtros: { ...action.filtros },
      };
    case "SETPRODUTOSATIVOS":
      return {
        ...state,
        produtosAtivos: [...action.produtosAtivos],
      };
    case "SETORDEMATIVA":
      let index = state.ordens.findIndex((ordem) => {
        return ordem.value === action.value;
      });
      let ordens = [
        { name: "A-Z", value: "nomeAZ", active: false },
        { name: "Z-A", value: "nomeZA", active: false },
        { name: "Preco (cresente)", value: "precoCrescente", active: false },
        {
          name: "Preco (decrescente)",
          value: "precoDecresente",
          active: false,
        },
      ];
      ordens[index].active = true;

      return {
        ...state,
        ordens,
      };

    default:
      return state;
  }
};
export default reducerLoja;
