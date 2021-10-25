import { changePage, loading, toggleModal } from "./Actions";
import callBackend from "./CallBackend";
import { criarOrcamento } from "./CriarOrcamento";
import { calcularValores } from "./TabelaActions/CalcularValores";

const csv2json = require("csvjson-csv2json");

export const criarOrcamentoVnda = (titulo) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loading(true));
      let informacoes = getState().informacoes;
      let indexVnda = getState().modals.criarOrcamento.vnda;
      let orcamento = getState().orcamentos.vnda[indexVnda];
      let token = localStorage.getItem("token");
      let produtos = [];
      let produtosRaw = csv2json(orcamento["CSV"]);
      for (let i = 0; i < produtosRaw.length; i++) {
        let { Referência: sku, Quantidade: quantidade } = produtosRaw[i];
        let data = { sku, tabela: informacoes.tabela, UF: informacoes.UF };

        await callBackend("/getProduto", token, data).then((resp) => {
          resp.valor = parseFloat(resp.valor);
          quantidade = parseInt(quantidade);
          produtos.push({ ...resp, quantidade, valorReal: 0, preco: 0 });
        });
      }
      await dispatch(criarOrcamento(titulo, produtos));
      await dispatch(calcularValores());
      await dispatch(toggleModal("criarOrcamento", false));
      await dispatch(toggleModal("sidebar", true));
      await dispatch(changePage("orcamentoAtual"));
      await dispatch(loading(false));
      await dispatch(toggleModal("instrucoes", true));
    } catch (e) {
      console.log(e);
      dispatch(loading(false));
    }
  };
};
