import { combineReducers } from "redux";
import reducerOrcamento from "./orcamento";
import reducerInformacoes from "./informacoes";
import reducerPages from "./pages";
import reducerAdminLogin from "./adminLogin";
import reducerVndaPedidos from "./vndaPedidos";
import reducerVndaModal from "./vndaModal";
import reducerOrcamentos from "./orcamentos";

const allReducers = combineReducers({
  orcamento: reducerOrcamento,
  informacoes: reducerInformacoes,
  pages: reducerPages,
  adminLogin: reducerAdminLogin,
  vndaPedidos: reducerVndaPedidos,
  vndaModal: reducerVndaModal,
  orcamentos: reducerOrcamentos,
});
export default allReducers;
