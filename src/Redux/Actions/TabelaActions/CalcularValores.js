import { updatePrecos } from "../Actions";

export const calcularValores = () => {
  return (dispatch, getState) => {
    let informacoes = getState().informacoes;
    let orcamentoAtivo = getState().orcamentos.salvos.find(
      (orcamento) => orcamento.id === getState().orcamentos.atual
    );

    orcamentoAtivo.total = 0;
    orcamentoAtivo.totalDisponivel = 0;

    for (let i = 0; i < orcamentoAtivo.itens.length; i++) {
      let item = orcamentoAtivo.itens[i];
      console.log(item.valor);
      item.valorReal = item.valor;

      if (item.nome.search("ARTOOLS") === -1) {
        let desconto = (100 - informacoes.desconto) / 100;
        item.valorReal *= desconto;

        if (item.quantidade % item.caixaMaster === 0) {
          item.valorReal *= 0.95;
        }
      }
      item.valorReal *= 1 + item.imposto;

      item.preco = item.valorReal * item.quantidade;
      orcamentoAtivo.total += item.preco;
      if (item.estoque > 0) {
        orcamentoAtivo.totalDisponivel += item.preco;
      }
    }

    orcamentoAtivo.subTotal = orcamentoAtivo.total;

    if (orcamentoAtivo.pagamentoAntecipado) {
      orcamentoAtivo.total = orcamentoAtivo.total * 0.945;
      orcamentoAtivo.totalDisponivel = orcamentoAtivo.totalDisponivel * 0.945;
    }

    let orcamentoAtivoIndex = getState().orcamentos.salvos.findIndex(
      (orcamento) => orcamento.id === getState().orcamentos.atual
    );

    dispatch(updatePrecos(orcamentoAtivoIndex, orcamentoAtivo));
  };
};
