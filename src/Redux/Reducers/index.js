import { combineReducers } from "redux";
import reducerOrcamento from "./orcamento";
import reducerInformacoes from "./informacoes";
import reducerPages from "./pages";
import reducerAdminLogin from "./adminLogin";
import reducerVndaPedidos from "./vndaPedidos";
import reducerOrcamentos from "./orcamentos";
import reducerModals from "./modals";

const allReducers = combineReducers({
  orcamento: reducerOrcamento,
  informacoes: reducerInformacoes,
  pages: reducerPages,
  adminLogin: reducerAdminLogin,
  vndaPedidos: reducerVndaPedidos,
  modals: reducerModals,
  orcamentos: reducerOrcamentos,
});
export default allReducers;
