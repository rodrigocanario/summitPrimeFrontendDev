import { trocarItem } from "../Actions";
import callBackend from "../CallBackend";
import { calcularValores } from "./CalcularValores";

export const ChangeAllProdutos = (indexOrcamento) => {
  let token = localStorage.getItem("token");
  return async (dispatch, getState) => {
    let produtos = getState().orcamentos.salvos[indexOrcamento].itens;
    for (let i = 0; i < produtos.length; i++) {
      const sku = produtos[i].sku;

      let informacoes = getState().informacoes;
      if (sku) {
        let data = {
          sku,
          tabela: informacoes.tabela,
          UF: informacoes.UF,
        };
        callBackend("/getProduto", token, data)
          .then(async (r) => {
            await dispatch(trocarItem(r, i, indexOrcamento));
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
                i,
                indexOrcamento
              )
            );
          });
      }
    }
    await dispatch(calcularValores());
  };
};
