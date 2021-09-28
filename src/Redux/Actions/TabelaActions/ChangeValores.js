import { updatePrecos } from "../Actions";

export const ChangeValores = (index, indexOrcamento) => {
  return (dispatch, getState) => {
    let orcamento = { ...getState().orcamentos.salvos[indexOrcamento] };
    let desconto = getState().informacoes.desconto;
    if (typeof index !== "undefined") {
      if (
        orcamento.itens[index].quantidade %
          orcamento.itens[index].caixaMaster ===
        0
      ) {
        orcamento.itens[index].valorReal =
          orcamento.itens[index].valorReal * 0.95;
      } else {
        console.log(orcamento.itens[index].valor + desconto);
        orcamento.itens[index].valorReal =
          (parseFloat(orcamento.itens[index].valor) *
            (100 - parseInt(desconto))) /
          100;
      }
      orcamento.itens[index].preco =
        orcamento.itens[index].quantidade * orcamento.itens[index].valorReal;
    }
    orcamento.subTotal = 0;
    orcamento.subTotalDisponivel = 0;
    for (let i = 0; i < orcamento.itens.length; i++) {
      orcamento.subTotal = orcamento.subTotal + orcamento.itens[i].preco;
      if (orcamento.itens[i].estoque > 0) {
        orcamento.subTotalDisponivel =
          orcamento.subTotalDisponivel + orcamento.itens[i].preco;
      }
    }
    orcamento.total = orcamento.subTotal;
    orcamento.totalDisponivel = orcamento.subTotalDisponivel;
    if (orcamento.pagamentoAntecipado) {
      orcamento.total = orcamento.subTotal * 0.95;
      orcamento.totalDisponivel = orcamento.subTotalDisponivel * 0.95;
    }
    dispatch(updatePrecos(indexOrcamento, orcamento));
  };
};
