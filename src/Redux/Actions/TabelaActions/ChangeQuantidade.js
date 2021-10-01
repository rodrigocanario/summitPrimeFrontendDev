import { changeQuantidade } from "../Actions";
import { calcularValores } from "./CalcularValores";

export const ChangeQuantidade = (str, index, indexOrcamento) => {
  return (dispatch) => {
    dispatch(changeQuantidade(str, index, indexOrcamento));
    dispatch(calcularValores(index, indexOrcamento));
  };
};
