import { loading, toggleModal, updateDatabank } from "../Actions";
import callAirtable from "../Utils/CallAirtable";

export const GetOrcamentosVnda = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(loading(true));

      let cnpj = getState().databank.userInfo.cnpj;

      let pedidos = await callAirtable(cnpj);
      await dispatch(updateDatabank({ orcamentosVnda: pedidos }));
      dispatch(toggleModal({ sidebar: false }));
      dispatch(loading(false));
      return Promise.resolve();
    } catch (e) {
      console.log("erro no callBackend");
      dispatch(loading(false));
      return Promise.resolve();
    }
  };
};
