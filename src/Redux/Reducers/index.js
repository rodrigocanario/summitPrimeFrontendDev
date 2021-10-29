import { combineReducers } from "redux";
import reducerInformacoes from "./informacoes";
import reducerPages from "./pages";
import reducerAdminLogin from "./adminLogin";
import reducerVndaPedidos from "./vndaPedidos";
import reducerOrcamentos from "./orcamentos";
import reducerModals from "./modals";
import reducerErrors from "./errors";

const allReducers = combineReducers({
  informacoes: reducerInformacoes,
  pages: reducerPages,
  adminLogin: reducerAdminLogin,
  vndaPedidos: reducerVndaPedidos,
  modals: reducerModals,
  orcamentos: reducerOrcamentos,
  errors: reducerErrors,
});
export default allReducers;
