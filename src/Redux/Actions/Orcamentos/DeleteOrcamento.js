import { changePage, deleteOrcamento, updateOrcamentos } from "../Actions";
import callBackend from "../Utils/CallBackend";

export const DeleteOrcamento = () => {
  return async (dispatch, getState) => {
    try {
      let token = localStorage.getItem("token");
      let index = getState().config.orcamentoAtivo;
      let id = getState().databank.orcamentosPrime[index].id;
      let { socket } = getState().config;
      callBackend(socket, "deleteOrcamento", token, { id });
      dispatch(deleteOrcamento(index));
      dispatch(changePage("salvos"));
      dispatch(updateOrcamentos({ atual: false }));
    } catch (error) {
      console.log(error);
    }
  };
};
