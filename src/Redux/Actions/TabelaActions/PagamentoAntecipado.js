import { pagamentoAntecipado } from "../Actions";
import { calcularValores } from "./CalcularValores";

export const PagamentoAntecipado = (isAntecipado) => {
  return async (dispatch, getState) => {
    let indexOrcamento = getState().orcamentos.salvos.findIndex(
      (orcamento) => orcamento.id === getState().orcamentos.atual
    );
    await dispatch(pagamentoAntecipado(indexOrcamento, isAntecipado));
    await dispatch(calcularValores());
  };
};
