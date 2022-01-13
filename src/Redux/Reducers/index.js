import { combineReducers } from "redux";
import reducerAdminLogin from "./adminLogin";
import reducerVndaPedidos from "./vndaPedidos";
import reducerClientesGold from "./clientesGold";
import reducerDatabank from "./databank";
import reducerConfig from "./config";

const allReducers = combineReducers({
  adminLogin: reducerAdminLogin,
  vndaPedidos: reducerVndaPedidos,
  clientesGold: reducerClientesGold,
  databank: reducerDatabank,
  config: reducerConfig,
});
export default allReducers;
