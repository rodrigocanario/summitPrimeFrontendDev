import {
  changePage,
  loading,
  toggleModal,
  toggleSideBar,
  updateOrcamentos,
} from "./Actions";
import callAirtable from "./CallAirtable";
import callBackend from "./CallBackend";

export const GetOrcamentos = (type, changePagee) => {
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
        dispatch(toggleModal("sidebar", true));
        dispatch(loading(false));
        return Promise.resolve();
      } else if (type === "salvos") {
        let token = localStorage.getItem("token");
        if (token) {
          let r = await callBackend("/getOrcamentoTableByCnpj", token, {
            cnpj,
          });
          await dispatch(updateOrcamentos({ [type]: r }));
          console.log(r);
          if (changePagee) {
            await dispatch(changePage("orcamentosSalvos"));
          }
          await dispatch(toggleModal("sidebar", true));
          await dispatch(loading(false));
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
