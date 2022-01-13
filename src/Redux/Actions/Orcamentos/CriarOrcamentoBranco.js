import { addOrcamento, changeOrcamentoAtivo, toggleModal } from "../Actions";
import { ChangePage } from "../Config/ChangePage";
import { SaveOrcamento } from "./SaveOrcamento";
let crypto = require("crypto");

export const CriarOrcamentoBranco = (titulo) => {
  return (dispatch, getState) => {
    try {
      let orcamentos = getState().databank.orcamentosPrime;
      let id = crypto.randomBytes(20).toString("hex").toUpperCase();

      let orcamento = {
        id,
        titulo,
        pagamentoAntecipado: false,
        itens: [],
        criadoEm: new Date(),
        ultimaModificacao: new Date(),
      };

      dispatch(addOrcamento(orcamento));
      dispatch(changeOrcamentoAtivo(orcamentos.length));
      dispatch(ChangePage("orcamentoAtual"));
      dispatch(toggleModal({ criarOrcamentoBranco: false }));
      dispatch(SaveOrcamento());
    } catch (e) {
      console.log(e);
    }
  };
};
