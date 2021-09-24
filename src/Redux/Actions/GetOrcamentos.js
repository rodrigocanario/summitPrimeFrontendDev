import { changePage, loading, updateOrcamentos } from "./Actions";
import callBackend from "./CallBackend";

export const GetOrcamentos = (type, cnpj, changePagee = true) => {
  let url, variavelCnpj, nextPage;
  if (type === "vnda") {
    url = "/getVndaTable";
    variavelCnpj = "CNPJ";
    nextPage = "orcamentosVnda";
  } else if (type === "salvos") {
    url = "/getOrcamentoTable";
    variavelCnpj = "cnpj";
    nextPage = "orcamentosSalvos";
  }
  return (dispatch) => {
    dispatch(loading(true));
    let token = localStorage.getItem("token");
    if (token) {
      callBackend(url, token).then((r) => {
        let orcamentos = [];
        for (let i = 0; i < r.length; i++) {
          if (
            r[i][variavelCnpj] &&
            parseInt(r[i][variavelCnpj].replace(/\D+/g, "")) === cnpj
          ) {
            orcamentos.push(r[i]);
          }
        }
        dispatch(updateOrcamentos({ [type]: orcamentos }));
        if (changePagee) {
          dispatch(changePage("orcamentosSalvos"));
        }
        dispatch(loading(false));
      });
    }
  };
};
