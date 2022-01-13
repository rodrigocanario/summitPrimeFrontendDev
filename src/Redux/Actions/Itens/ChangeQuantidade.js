import { updateOrcamentoPrime } from "../Actions";
import { SaveOrcamento } from "../Orcamentos/SaveOrcamento";

export const ChangeQuantidade = (sku, quantidade) => {
  return (dispatch, getState) => {
    console.log(sku);
    console.log(quantidade);
    let indexOrcamento = getState().config.orcamentoAtivo;
    let orcamento = getState().databank.orcamentosPrime[indexOrcamento];
    let produtoIndex = orcamento.itens.findIndex((item) => item.sku === sku);

    orcamento.itens[produtoIndex].quantidade = quantidade;

    dispatch(updateOrcamentoPrime(indexOrcamento, orcamento));
    dispatch(SaveOrcamento());
  };
};
