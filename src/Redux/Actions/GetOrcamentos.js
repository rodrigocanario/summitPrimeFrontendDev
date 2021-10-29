import { changePage, loading, toggleModal, updateOrcamentos } from "./Actions";
import callAirtable from "./CallAirtable";
import callBackend from "./CallBackend";

export const GetOrcamentos = (type, changePagee) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loading(true));
      let url;
      let token = localStorage.getItem("token");
      let cnpj = getState().informacoes.cnpj;
      if (type === "vnda") {
        let pedidos = await callAirtable(cnpj);
        dispatch(updateOrcamentos({ [type]: pedidos }));
        if (changePagee) {
          dispatch(changePage("orcamentosVnda"));
        }
        dispatch(toggleModal("sidebar", true));
        dispatch(loading(false));
        return Promise.resolve();
      } else if (type === "salvos") {
        url = "/getOrcamentoTableByCnpj";
      } else if (type === "nf") {
        url = "/getNf";
      } else {
        return Promise.resolve();
      }
      if (token) {
        console.log({ cnpj });
        let r = await callBackend(url, token, { cnpj });
        console.log(r);
        await dispatch(updateOrcamentos({ [type]: r }));
        await dispatch(toggleModal("sidebar", true));
        await dispatch(loading(false));
        return Promise.resolve();
      }
    } catch (e) {
      console.log("erro no callBackend");
      dispatch(loading(false));
      return Promise.resolve();
    }
  };
};
