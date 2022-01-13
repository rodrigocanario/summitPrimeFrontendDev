// let defaultState = [];

// const reducerOrcamentos = (state = defaultState, action) => {
//   const index = action.index;
//   let item;
//   if (state.salvos[action.indexOrcamento]) {
//     item = state.salvos[action.indexOrcamento].itens[index];
//   }
//   switch (action.type) {
//     case "UPDATEORCAMENTOS":
//       return [...action.orcamentosArray];

//     case "CHANGEITENS":
//       state.salvos[action.indexOrcamento].itens = action.itens;
//       return { ...state };

//     case "UPDATEORCAMENTOSALVO":
//       state.salvos[action.indexOrcamento] = action.orcamento;
//       return { ...state };
//     case "PAGAMENTOANTECIPADO":
//       state.salvos[action.indexOrcamento].pagamentoAntecipado =
//         action.isAntecipado;
//       return { ...state };
//     default:
//       return state;
//   }
// };

// export default reducerOrcamentos;
