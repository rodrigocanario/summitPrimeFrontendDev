import {
  changePage,
  hideSalvosModal,
  loading,
  updateOrcamentos,
} from "./Actions";
import callBackend from "./CallBackend";
import { GetOrcamentos } from "./GetOrcamentos";

export const criarOrcamento = (infos, changePagina) => {
  return async (dispatch) => {
    dispatch(loading(true));
    let token = localStorage.getItem("token");
    let id = Math.random().toString(36).slice(-8).toUpperCase();
    let orcamentoPadrao = {
      id,
      titulo: "",
      cnpj: "",
      subTotal: 0,
      subTotalDisponivel: 0,
      total: "0",
      totalDisponivel: 0,
      pagamentoAntecipado: false,
      itens: [
        {
          sku: "",
          nome: "",
          caixaMaster: 0,
          valor: 0,
          valorReal: 0,
          quantidade: 0,
          multiplo: 0,
          preco: 0,
          estoque: 0,
        },
      ],
      criadoEm: new Date(),
      ultimaModificacao: new Date(),
    };
    let orcamento = { ...orcamentoPadrao, ...infos, cnpj: infos.cnpj };
    console.log({ orcamento });
    await callBackend("/putOrcamento", token, { orcamento })
      .then(async (r) => {
        await dispatch(GetOrcamentos("salvos", parseInt(infos.cnpj), false));
        dispatch(updateOrcamentos({ atual: id }));
        dispatch(hideSalvosModal());
        dispatch(loading(false));
        if (changePagina) {
          dispatch(changePage("orcamentoAtual"));
        }
        Promise.resolve();
      })
      .catch((e) => {
        console.log(e);
        dispatch(loading(false));
      });
  };
};
