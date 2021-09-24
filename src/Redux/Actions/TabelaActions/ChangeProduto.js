import { trocarItem } from "../Actions";
import callBackend from "../CallBackend";

export const ChangeProduto = (index, indexOrcamento, sku, tabela, desconto) => {
  let token = localStorage.getItem("token");
  return (dispatch) => {
    if (sku) {
      callBackend("/getProduto", token, { sku, tabela }).then((r) => {
        dispatch(trocarItem(r, index, indexOrcamento, desconto));
      });
    }
  };
};
