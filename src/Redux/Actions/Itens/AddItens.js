import { updateOrcamentoPrime } from "../Actions";
import { SaveOrcamento } from "../Orcamentos/SaveOrcamento";

export const AddItens = (sku) => {
  return (dispatch, getState) => {
    let indexOrcamento = getState().config.orcamentoAtivo;

    let orcamento = getState().databank.orcamentosPrime[indexOrcamento];
    let indexBranco = orcamento.itens.findIndex((item) => {
      return item.sku === undefined;
    });
    if (sku) {
      sku = parseInt(sku);

      let produtos = getState().databank.produtos;

      let item = produtos.find((produto) => {
        return produto.sku === sku;
      });

      orcamento.itens.push({ ...item, quantidade: item.multiplo });
      if (indexBranco !== -1) {
        orcamento.itens.splice(indexBranco, 1);
      }
    } else {
      if (indexBranco === -1) {
        orcamento.itens.push({});
      } else {
        orcamento.itens.push({});
        orcamento.itens.splice(indexBranco, 1);
      }
    }

    dispatch(updateOrcamentoPrime(indexOrcamento, orcamento));
    dispatch(SaveOrcamento());
  };
};
