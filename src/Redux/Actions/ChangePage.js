import { changePage, toggleModal } from "./Actions";
import { CalculateClientesGold } from "./CalculateClientesGold";
import { GetClientesGold } from "./GetClientesGold";
import { GetOrcamentos } from "./GetOrcamentos";

export const ChangePage = (page) => {
  return async (dispatch, getState) => {
    switch (page) {
      case "nf":
      case "salvos":
      case "vnda":
        await dispatch(GetOrcamentos(page));
        await dispatch(changePage(page));
        break;
      case "criarOrcamento":
        dispatch(toggleModal("criarOrcamento", true));
        break;

      case "clientesGold":
        await dispatch(GetClientesGold());
        await dispatch(CalculateClientesGold());
        await dispatch(changePage(page));
        await dispatch(toggleModal("sidebar", true));
        break;

      default:
        await dispatch(toggleModal("sidebar", true));
        await dispatch(toggleModal("instrucoes", false));
        await dispatch(changePage(page));
        break;
    }
  };
};
