let defaultState = {
  salvos: [],
  vnda: [],
  atual: false,
};

const reducerOrcamentos = (state = defaultState, action) => {
  const index = action.index;
  let item;
  if (state.salvos[action.indexOrcamento]) {
    item = state.salvos[action.indexOrcamento].itens[index];
  }
  switch (action.type) {
    case "UPDATEORCAMENTOS":
      return { ...state, ...action.input };
    case "ADDITEM":
      let salvos = [...state.salvos];
      salvos[action.indexOrcamento].itens.push({
        sku: "",
        nome: "",
        caixaMaster: 0,
        valor: 0,
        valorReal: 0,
        quantidade: 0,
        multiplo: 0,
        preco: 0,
        estoque: 0,
      });
      return { ...state, salvos };
    case "DELETEITEM":
      console.log(index);
      state.salvos[action.indexOrcamento].itens.splice(index, 1);
      console.log(state.salvos[action.indexOrcamento].itens);
      return { ...state };
    case "TROCARITEM":
      state.salvos[action.indexOrcamento].itens[index] = {
        ...state.salvos[action.indexOrcamento].itens[index],
        ...action.infos,
        valorReal: 0,
      };
      return { ...state };

    case "CHANGEQUANTIDADE":
      if (action.str === "inc") {
        const novaQuantidade = item.quantidade + item.multiplo;
        state.salvos[action.indexOrcamento].itens[index].quantidade =
          novaQuantidade;
      } else if (action.str === "dec") {
        const novaQuantidade = item.quantidade - item.multiplo;
        if (novaQuantidade >= 0) {
          state.salvos[action.indexOrcamento].itens[index].quantidade =
            novaQuantidade;
        }
      }
      return { ...state };
    case "UPDATEPRECOS":
      state.salvos[action.indexOrcamento] = action.orcamento;
      return { ...state };
    case "PAGAMENTOANTECIPADO":
      state.salvos[action.indexOrcamento].pagamentoAntecipado =
        action.isAntecipado;
      return { ...state };
    default:
      return state;
  }
};

export default reducerOrcamentos;
