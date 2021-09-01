import { combineReducers } from "redux";
import reducerOrcamento from "./orcamento";
import reducerLogin from "./login";
import reducerPedMin from "./pedidoMin";
import reducerPages from "./pages";
import reducerAdminLogin from "./adminLogin";
import reducerVndaPedidos from "./vndaPedidos";
import reducerVndaModal from "./vndaModal";

const allReducers = combineReducers({
    orcamento: reducerOrcamento,
    login: reducerLogin,
    pedidoMin: reducerPedMin,
    pages: reducerPages,
    adminLogin: reducerAdminLogin,
    vndaPedidos: reducerVndaPedidos,
    vndaModal: reducerVndaModal
})
export default allReducers