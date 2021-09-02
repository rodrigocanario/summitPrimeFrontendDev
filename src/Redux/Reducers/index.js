import { combineReducers } from "redux";
import reducerOrcamento from "./orcamento";
import reducerInformacoes from "./informacoes";
import reducerPages from "./pages";
import reducerAdminLogin from "./adminLogin";
import reducerVndaPedidos from "./vndaPedidos";
import reducerVndaModal from "./vndaModal";

const allReducers = combineReducers({
  orcamento: reducerOrcamento,
  informacoes: reducerInformacoes,
  pages: reducerPages,
  adminLogin: reducerAdminLogin,
  vndaPedidos: reducerVndaPedidos,
  vndaModal: reducerVndaModal,
});
export default allReducers;
