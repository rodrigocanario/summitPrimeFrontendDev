import { toggleSaving } from "../Actions";
import callBackend from "../Utils/CallBackend";

export const SaveOrcamento = () => {
  return (dispatch, getState) => {
    try {
      dispatch(toggleSaving(true));
      console.log("salvando:");
      let { socket, orcamentoAtivo } = getState().config;
      let orcamentos = getState().databank.orcamentosPrime;
      let token = localStorage.getItem("token");
      let { itens, ...orcamentoAtual } = orcamentos[orcamentoAtivo];

      orcamentoAtual.itens = [];
      orcamentoAtual.ultimaModificacao = new Date();

      for (let i = 0; i < itens.length; i++) {
        const { sku, quantidade } = itens[i];
        if (quantidade) {
          orcamentoAtual.itens.push({ sku, quantidade });
        }
      }
      console.log(orcamentoAtual);

      callBackend(socket, "saveOrcamento", token, { ...orcamentoAtual }).then(
        (r) => {
          dispatch(toggleSaving(false));
        }
      );
    } catch (e) {
      console.log(e);
      dispatch(toggleSaving(false));
    }
  };
};
