import { changePage, loading, updateOrcamentos } from "./Actions";
import callBackend from "./CallBackend";

export const GetOrcamentos = (type, cnpj, changePagee = true) => {
  let url, nextPage;
  if (type === "vnda") {
    url = "/getVndaTableByCnpj";
    nextPage = "orcamentosVnda";
  } else if (type === "salvos") {
    url = "/getOrcamentoTableByCnpj";
    nextPage = "orcamentosSalvos";
  }
  return async (dispatch) => {
    dispatch(loading(true));
    let token = localStorage.getItem("token");
    if (token) {
      await callBackend(url, token, { cnpj })
        .then((r) => {
          dispatch(updateOrcamentos({ [type]: r }));
          if (changePagee) {
            dispatch(changePage(nextPage));
          }
          dispatch(loading(false));
          return Promise.resolve();
        })
        .catch((e) => {
          console.log("erro no callBackend");
          dispatch(loading(false));
          return Promise.resolve();
        });
    }
  };
};
