import {
  addOrcamento,
  changeOrcamentoAtivo,
  changePage,
  loading,
  toggleModal,
} from "../Actions";

import { SaveOrcamento } from "./SaveOrcamento";
let crypto = require("crypto");

const csv2json = require("csvjson-csv2json");

export const CriarOrcamentoVnda = (titulo) => {
  return async (dispatch, getState) => {
    try {
      console.log("criar");
      let id = crypto.randomBytes(20).toString("hex").toUpperCase();
      let orcamento = {
        id,
        titulo,
        pagamentoAntecipado: false,
        itens: [],
        criadoEm: new Date(),
        ultimaModificacao: new Date(),
      };

      let databank = getState().databank;
      let config = getState().config;
      let orcamentoIndex = databank.orcamentosPrime.length;
      let indexOrcamentoVnda = config.modals.criarOrcamentoVnda.id;
      console.log(indexOrcamentoVnda);
      let orcamentoVnda = databank.orcamentosVnda[indexOrcamentoVnda];
      let produtos = databank.produtos;
      let produtosVnda = csv2json(orcamentoVnda["CSV"]);

      for (let i = 0; i < produtosVnda.length; i++) {
        let { Referência: sku, Quantidade: quantidade } = produtosVnda[i];
        let item = produtos.find((produto) => {
          return produto.sku === parseInt(sku);
        });
        if (item && quantidade) {
          orcamento.itens.push({ ...item, quantidade });
        } else {
          orcamento.itens.push({ sku });
        }
      }
      dispatch(addOrcamento(orcamento));
      dispatch(changeOrcamentoAtivo(orcamentoIndex));
      dispatch(toggleModal({ criarOrcamentoVnda: { show: false } }));
      dispatch(changePage("orcamentoAtual"));
      dispatch(SaveOrcamento());
    } catch (e) {
      console.log(e);
      dispatch(loading(false));
    }
  };
};
