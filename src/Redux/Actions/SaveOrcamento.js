import { savingOrcamento } from "./Actions";
import callBackend from "./CallBackend";

export const saveOrcamento = (infos) => {
  return (dispatch) => {
    dispatch(savingOrcamento(true));
    let token = localStorage.getItem("token");
    let orcamento = { ...infos, ultimaModificacao: new Date() };
    callBackend("/putOrcamento", token, { orcamento }).then((r) => {
      dispatch(savingOrcamento(false));
    });
  };
};
