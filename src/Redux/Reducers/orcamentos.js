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
        valor: 0,
        quantidade: 0,
        preco: 0,
        multiplo: 0,
      });
      return { ...state, salvos };
    case "TROCARITEM":
      const info = action.infos;
      let preco = (parseFloat(info.valor) * parseInt(action.desconto)) / 100;
      state.salvos[action.indexOrcamento].itens[index] = {
        sku: info.sku,
        nome: info.nome,
        valor: preco.toFixed(2),
        valorReal: preco.toFixed(2),
        multiplo: info.multiplo,
        quantidade: 0,
        caixaMaster: info.caixaMaster,
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
      return state;
  }

  // case "INCREMENT":
  //   let caixaMaster = state.itens[action.index].caixaMaster;
  //   let quantidade =
  //     parseFloat(state.itens[action.index].quantidade) +
  //     parseFloat(state.itens[action.index].multiplo);
  //   let valor = state.itens[action.index].valor;
  //   if (quantidade % caixaMaster === 0) {
  //     valor = (valor * 0.95).toFixed(2);
  //   }
  //   state.itens[action.index] = {
  //     ...state.itens[action.index],
  //     quantidade,
  //     valorReal: valor,
  //   };
  //   return state;
  // case "DECREMENT":
  //   let quantidadeDecrement =
  //     state.itens[action.index].quantidade -
  //     state.itens[action.index].multiplo;
  //   if (quantidadeDecrement >= 0) {
  //     let caixaMaster = state.itens[action.index].caixaMaster;
  //     let valor = state.itens[action.index].valor;
  //     if (
  //       quantidadeDecrement % caixaMaster === 0 &&
  //       quantidadeDecrement > 0
  //     ) {
  //       valor = valor * 0.95;
  //     }
  //     state.itens[action.index] = {
  //       ...state.itens[action.index],
  //       quantidade: quantidadeDecrement,
  //       valorReal: valor,
  //     };
  // }
  // return state;
  // }
};

export default reducerOrcamentos;
