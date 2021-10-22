import {
  changePage,
  loading,
  toggleSideBar,
  updateOrcamentos,
} from "./Actions";
import callAirtable from "./CallAirtable";
import callBackend from "./CallBackend";

export const GetOrcamentos = (type, cnpj, changePagee = true) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loading(true));
      let cnpj = getState().informacoes.cnpj;
      if (type === "vnda") {
        let pedidos = await callAirtable(cnpj);
        dispatch(updateOrcamentos({ [type]: pedidos }));
        if (changePagee) {
          dispatch(changePage("orcamentosVnda"));
        }
        dispatch(toggleSideBar(true));
        dispatch(loading(false));
        return Promise.resolve();
      } else if (type === "salvos") {
        let token = localStorage.getItem("token");
        if (token) {
          let r = await callBackend("/getOrcamentoTableByCnpj", token, {
            cnpj,
          });
          dispatch(updateOrcamentos({ [type]: r }));
          if (changePagee) {
            dispatch(changePage("orcamentosSalvos"));
          }
          dispatch(toggleSideBar(true));
          dispatch(loading(false));
          return Promise.resolve();
        }
      }
    } catch (e) {
      console.log("erro no callBackend");
      dispatch(loading(false));
      return Promise.resolve();
    }
  };
};
