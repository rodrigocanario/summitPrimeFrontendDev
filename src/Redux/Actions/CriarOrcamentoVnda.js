import { changePage, hideVndaModal, updateOrcamentos } from "./Actions";
import callBackend from "./CallBackend";
import { criarOrcamento } from "./CriarOrcamento";
import { saveOrcamento } from "./SaveOrcamento";
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
      let data = { sku, tabela: informacoes.tabela };
      await callBackend("/getProduto", token, data).then((resp) => {
        let valorReal = resp.valor * ((100 - informacoes.desconto) / 100);
        if (quantidade % resp.caixaMaster === 0) {
          valorReal = resp.valor * ((95 - informacoes.desconto) / 100);
        }
        let preco = valorReal * quantidade;
        produtos.push({ ...resp, quantidade, valorReal, preco });
      });
    }
    console.log(produtos);
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
    dispatch(changePage("home"));
  };
};

// const novoOrc = async (e) => {
//     let produtos = [];
//     let produtosRaw = csv2json(orcamentosVnda[e.target.value]["CSV"]);
//     for (let i = 0; i < produtosRaw.length; i++) {
//       const element = produtosRaw[i];
//       let { Referência: sku, Quantidade: quantidade } = element;
//       let data = { sku, tabela: informacoes.tabela };
//       await getProduto(data).then((resp) => {
//         let valorReal = resp.valor;
//         if (quantidade % resp.caixaMaster === 0) {
//           valorReal = (resp.valor * 0.95).toFixed(2);
//         }
//         let preco = valorReal * quantidade;
//         produtos.push({ ...resp, quantidade, valorReal, preco });
//       });
//     }
//     console.log(produtos);
//     dispatch(novoOrcamento(produtos));
//     dispatch(calcularTotal(0));
//     localStorage.setItem("orcamento", JSON.stringify(orcamento));
//     dispatch(changePage("home"));
//   };
