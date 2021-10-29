import { changePage, toggleModal } from "./Actions";
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

      default:
        await dispatch(toggleModal("sidebar", true));
        await dispatch(toggleModal("instrucoes", false));
        await dispatch(changePage(page));
        break;
    }
  };
};
