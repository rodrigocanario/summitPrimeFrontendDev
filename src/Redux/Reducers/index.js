import { combineReducers } from "redux";
import reducerVndaPedidos from "./vndaPedidos";
import reducerClientesGold from "./clientesGold";
import reducerDatabank from "./databank";
import reducerConfig from "./config";
import reducerLoja from "./loja";

const allReducers = combineReducers({
  vndaPedidos: reducerVndaPedidos,
  clientesGold: reducerClientesGold,
  databank: reducerDatabank,
  config: reducerConfig,
  loja: reducerLoja,
});
export default allReducers;
