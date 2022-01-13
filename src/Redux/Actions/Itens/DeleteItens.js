import { updateOrcamentoPrime } from "../Actions";
import { SaveOrcamento } from "../Orcamentos/SaveOrcamento";

export const DeleteItens = (sku) => {
  return (dispatch, getState) => {
    sku = parseInt(sku);
    let indexOrcamento = getState().config.orcamentoAtivo;

    let orcamento = getState().databank.orcamentosPrime[indexOrcamento];
    let index = orcamento.itens.findIndex((item) => item.sku === sku);
    if (orcamento.itens.length <= 1) {
      orcamento.itens.push({});
    }

    orcamento.itens.splice(index, 1);

    dispatch(updateOrcamentoPrime(indexOrcamento, orcamento));
    dispatch(SaveOrcamento());
  };
};
