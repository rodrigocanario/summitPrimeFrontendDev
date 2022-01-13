import { loading, updateClientesGoldDataCrua } from "../Actions";
import callBackend from "../Utils/CallBackend";

export const GetClientesGold = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(loading(true));
      let token = localStorage.getItem("token");
      let dataCrua = await callBackend("/calcularClientesGold", token);
      await dispatch(updateClientesGoldDataCrua(dataCrua));
      dispatch(loading(false));
    } catch (e) {
      console.log("erro no callBackend");
      dispatch(loading(false));
      return Promise.resolve();
    }
  };
};
