import { updateDatabank } from "../Actions";

export const CalculateOrcamentosPrime = (orcamentosArray) => {
  return async (dispatch, getState) => {
    let produtos = getState().databank.produtos;
    let orcamentosToPush = [];
    for (let i = 0; i < orcamentosArray.length; i++) {
      const orcamento = orcamentosArray[i];
      let itens = [...orcamento.itens];
      let itensToPush = [];
      for (let j = 0; j < itens.length; j++) {
        const item = itens[j];

        let produto = produtos.find((produto) => {
          return produto.sku === item.sku;
        });
        itensToPush.push({ ...item, ...produto });
      }
      let orc = { ...orcamento, itens: [...itensToPush] };
      orcamentosToPush.push(orc);
    }
    dispatch(updateDatabank({ orcamentosPrime: orcamentosToPush }));
  };
};
