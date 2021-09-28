import { loading, savingOrcamento } from "./Actions";
import callBackend from "./CallBackend";

export const saveOrcamento = (infos) => {
  return (dispatch) => {
    dispatch(savingOrcamento(true));
    let token = localStorage.getItem("token");
    let date = new Date();
    let offset = date.getTimezoneOffset();
    date = date - offset * 60000;
    let orcamento = { ...infos, ultimaModificacao: new Date(date) };
    callBackend("/putOrcamento", token, { orcamento }).then((r) => {
      dispatch(savingOrcamento(false));
    });
  };
};
