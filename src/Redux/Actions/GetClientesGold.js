import { loading, updateClientesGoldDataCrua } from "./Actions";
import callBackend from "./CallBackend";

export const GetClientesGold = () => {
  return async (dispatch, getState) => {
    try {
      let token = localStorage.getItem("token");
      let dataCrua = await callBackend("/calcularClientesGold", token);
      await dispatch(updateClientesGoldDataCrua(dataCrua));
    } catch (e) {
      console.log("erro no callBackend");
      dispatch(loading(false));
      return Promise.resolve();
    }
  };
};
