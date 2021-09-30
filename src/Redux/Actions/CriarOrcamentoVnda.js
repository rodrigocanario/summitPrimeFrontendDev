import { changePage, hideVndaModal, updateOrcamentos } from "./Actions";
import callBackend from "./CallBackend";
import { criarOrcamento } from "./CriarOrcamento";
import { ChangeValores } from "./TabelaActions/ChangeValores";

const csv2json = require("csvjson-csv2json");

export const criarOrcamentoVnda = (indexVnda, titulo) => {
  return async (dispatch, getState) => {
    let informacoes = getState().informacoes;
    let orcamento = getState().orcamentos.vnda[indexVnda];
    let token = localStorage.getItem("token");
    let produtos = [];
    let produtosRaw = csv2json(orcamento["CSV"]);
    for (let i = 0; i < produtosRaw.length; i++) {
      const element = produtosRaw[i];
      let { Referência: sku, Quantidade: quantidade } = element;
      quantidade = parseInt(quantidade);
      let data = { sku, tabela: informacoes.tabela };
      await callBackend("/getProduto", token, data).then((resp) => {
        resp.valor = parseFloat(resp.valor);
        let valorReal = resp.valor * ((100 - informacoes.desconto) / 100);
        if (quantidade % resp.caixaMaster === 0) {
          valorReal = resp.valor * ((95 - informacoes.desconto) / 100);
        }
        let preco = valorReal * quantidade;
        produtos.push({ ...resp, quantidade, valorReal, preco });
      });
    }
    let id = Math.random().toString(36).slice(-8).toUpperCase();
    let index;
    await dispatch(
      criarOrcamento({
        itens: produtos,
        id,
        cnpj: `${informacoes.cnpj}`,
        titulo,
      })
    );
    let indexOrcamento = getState().orcamentos.salvos.findIndex(
      (orcamento) => orcamento.id === id
    );
    dispatch(ChangeValores(index, indexOrcamento));
    dispatch(updateOrcamentos({ atual: id }));
    dispatch(hideVndaModal());
    dispatch(changePage("orcamentoAtual"));
  };
};
