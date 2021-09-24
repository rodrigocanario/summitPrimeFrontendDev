import { changeQuantidade } from "../Actions";
import { ChangeValores } from "./ChangeValores";

export const ChangeQuantidade = (str, index, indexOrcamento) => {
  return (dispatch) => {
    dispatch(changeQuantidade(str, index, indexOrcamento));
    dispatch(ChangeValores(index, indexOrcamento));
  };
};
