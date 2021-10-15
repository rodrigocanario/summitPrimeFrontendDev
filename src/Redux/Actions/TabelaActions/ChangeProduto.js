import { trocarItem } from "../Actions";
import callBackend from "../CallBackend";
import { calcularValores } from "./CalcularValores";

export const ChangeProduto = (index, indexOrcamento, sku) => {
  let token = localStorage.getItem("token");
  return (dispatch, getState) => {
    let informacoes = getState().informacoes;
    if (sku) {
      let data = {
        sku,
        tabela: informacoes.tabela,
        UF: informacoes.UF,
      };
      console.log(data);
      callBackend("/getProduto", token, data)
        .then(async (r) => {
          await dispatch(trocarItem(r, index, indexOrcamento));
          await dispatch(calcularValores());
        })
        .catch(async (e) => {
          await dispatch(
            trocarItem(
              {
                sku: "",
                nome: "",
                valor: 0,
                valorReal: 0,
                quantidade: 0,
                preco: 0,
                multiplo: 0,
                caixaMaster: 0,
                estoque: "",
              },
              index,
              indexOrcamento
            )
          );
          await dispatch(calcularValores());
        });
    }
  };
};
