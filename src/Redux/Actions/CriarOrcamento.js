import { changePage, hideSalvosModal, updateOrcamentos } from "./Actions";
import callBackend from "./CallBackend";
import { GetOrcamentos } from "./GetOrcamentos";

export const criarOrcamento = (infos) => {
  return (dispatch) => {
    let token = localStorage.getItem("token");
    let id = Math.random().toString(36).slice(-8).toUpperCase();
    let orcamentoPadrao = {
      id,
      titulo: "",
      cnpj: "",
      subTotal: 0,
      total: "0",
      pagamentoAntecipado: false,
      itens: [],
    };
    let orcamento = { ...orcamentoPadrao, ...infos };
    callBackend("/putOrcamento", token, { orcamento });
    dispatch(updateOrcamentos({ atual: id }));
    dispatch(GetOrcamentos("salvos", parseInt(infos.cnpj), false));
    dispatch(hideSalvosModal());
    dispatch(changePage("home"));
  };
};
