import { trocarItem } from "../Actions";
import callBackend from "../CallBackend";

export const ChangeProduto = (index, indexOrcamento, sku) => {
  let token = localStorage.getItem("token");
  return (dispatch, getState) => {
    let informacoes = getState().informacoes;
    if (sku) {
      callBackend("/getProduto", token, {
        sku,
        tabela: informacoes.tabela,
      }).then((r) => {
        dispatch(trocarItem(r, index, indexOrcamento, informacoes.desconto));
      });
    }
  };
};
