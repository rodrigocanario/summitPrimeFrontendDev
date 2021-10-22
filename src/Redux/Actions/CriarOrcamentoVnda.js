import {
  changePage,
  hideVndaModal,
  loading,
  toggleModal,
  toggleSideBar,
  updateOrcamentos,
} from "./Actions";
import callBackend from "./CallBackend";
import { criarOrcamento } from "./CriarOrcamento";
import { calcularValores } from "./TabelaActions/CalcularValores";

const csv2json = require("csvjson-csv2json");

export const criarOrcamentoVnda = (indexVnda, titulo) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loading(true));
      let informacoes = getState().informacoes;
      let orcamento = getState().orcamentos.vnda[indexVnda];
      let token = localStorage.getItem("token");
      let produtos = [];
      let produtosRaw = csv2json(orcamento["CSV"]);
      console.log(produtosRaw);
      for (let i = 0; i < produtosRaw.length; i++) {
        let { Referência: sku, Quantidade: quantidade } = produtosRaw[i];
        let data = { sku, tabela: informacoes.tabela, UF: informacoes.UF };

        await callBackend("/getProduto", token, data).then((resp) => {
          resp.valor = parseFloat(resp.valor);
          quantidade = parseInt(quantidade);
          produtos.push({ ...resp, quantidade, valorReal: 0, preco: 0 });
        });
      }
      let id = Math.random().toString(36).slice(-8).toUpperCase();
      await dispatch(
        criarOrcamento({
          itens: produtos,
          id,
          cnpj: `${informacoes.cnpj}`,
          titulo,
        })
      );
      await dispatch(updateOrcamentos({ atual: id }));
      await dispatch(calcularValores());
      await dispatch(hideVndaModal());
      await dispatch(toggleSideBar(true));
      await dispatch(changePage("orcamentoAtual"));
      await dispatch(loading(false));
      await dispatch(toggleModal("atual", true));
    } catch (e) {
      console.log(e);
      dispatch(loading(false));
    }
  };
};
