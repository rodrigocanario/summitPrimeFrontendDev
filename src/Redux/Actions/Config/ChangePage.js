import { changePage, toggleModal, toggleSidebar } from "../Actions";
import { CalculateClientesGold } from "../ClientesGold/CalculateClientesGold";
import { GetClientesGold } from "../ClientesGold/GetClientesGold";
import { GetOrcamentosVnda } from "../Orcamentos/GetOrcamentosVnda";

export const ChangePage = (page) => {
  return async (dispatch) => {
    switch (page) {
      case "nf":
      case "vnda":
        await dispatch(GetOrcamentosVnda());
        await dispatch(changePage(page));
        break;
      case "criarOrcamento":
        dispatch(toggleModal({ criarOrcamentoBranco: true }));
        break;

      case "clientesGold":
        await dispatch(GetClientesGold());
        await dispatch(CalculateClientesGold());
        await dispatch(changePage(page));
        await dispatch(toggleModal("sidebar", true));
        break;
      case "orcamentoAtual":
        await dispatch(toggleModal({ instrucoes: false }));
        await dispatch(toggleSidebar(false));
        await dispatch(changePage(page));
        break;
      default:
        await dispatch(toggleSidebar(false));
        await dispatch(changePage(page));
        break;
    }
  };
};
