import { updateOrcamentoPrime } from "../Actions";
import { SaveOrcamento } from "./SaveOrcamento";

export const PagamentoAntecipado = (isAntecipado) => {
  return async (dispatch, getState) => {
    let indexOrcamento = getState().config.orcamentoAtivo;
    let orcamento = getState().databank.orcamentosPrime[indexOrcamento];
    orcamento.pagamentoAntecipado = isAntecipado;
    dispatch(updateOrcamentoPrime(indexOrcamento, orcamento));
    dispatch(SaveOrcamento());
  };
};
