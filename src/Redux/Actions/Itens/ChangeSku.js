import { updateOrcamentoPrime } from "../Actions";
import { SaveOrcamento } from "../Orcamentos/SaveOrcamento";

export const ChangeSku = (index, sku) => {
  return async (dispatch, getState) => {
    sku = parseInt(sku);
    let indexOrcamento = getState().config.orcamentoAtivo;
    let orcamento = getState().databank.orcamentosPrime[indexOrcamento];
    let produtos = getState().databank.produtos;
    let item = produtos.find((produto) => {
      return produto.sku === sku;
    });
    if (item) {
      orcamento.itens[index] = { ...item, quantidade: item.multiplo };
    } else {
      orcamento.itens[index] = { sku };
    }
    dispatch(updateOrcamentoPrime(indexOrcamento, orcamento));
    dispatch(SaveOrcamento());
  };
};
