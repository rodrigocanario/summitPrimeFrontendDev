import { changePage, toggleModal } from "./Actions";
import { GetOrcamentos } from "./GetOrcamentos";

export const ChangePage = (page) => {
  return async (dispatch, getState) => {
    switch (page) {
      case "salvos":
      case "vnda":
        await dispatch(GetOrcamentos(page));
        await dispatch(changePage(page));
        break;
      case "criarOrcamento":
        dispatch(toggleModal("criarOrcamento", true));
        break;

      default:
        await dispatch(changePage(page));
        await dispatch(toggleModal("sidebar", true));
        break;
    }
  };
};
