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
    default:
      return state;
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
    case "TROCARITEM":
      const info = action.infos;
      let preco = info.valor;
      if (info.nome.search("ARTOOLS") === -1) {
        preco =
          (parseFloat(info.valor) * (100 - parseInt(action.desconto))) / 100;
      }

      state.salvos[action.indexOrcamento].itens[index] = {
        ...state.salvos[action.indexOrcamento].itens[index],
        sku: info.sku,
        nome: info.nome,
        caixaMaster: info.caixaMaster,
        valor: info.valor.toFixed(2),
        valorReal: preco,
        multiplo: info.multiplo,
        estoque: info.estoque,
      };
      return state;

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
      console.log(action.indexOrcamento);
      state.salvos[action.indexOrcamento].pagamentoAntecipado =
        !state.salvos[action.indexOrcamento].pagamentoAntecipado;
      return { ...state };
  }
};

export default reducerOrcamentos;
