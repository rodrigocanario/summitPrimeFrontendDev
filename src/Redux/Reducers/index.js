import { combineReducers } from "redux";
import reducerItens from "./itens";
import reducerLogin from "./login";
import reducerPedMin from "./pedidoMin";
import reducerPages from "./pages";
import reducerAdminLogin from "./adminLogin";
import reducerVndaPedidos from "./vndaPedidos";
import reducerVndaModal from "./vndaModal";

const allReducers = combineReducers({
    itens: reducerItens,
    login: reducerLogin,
    pedidoMin: reducerPedMin,
    pages: reducerPages,
    adminLogin: reducerAdminLogin,
    vndaPedidos: reducerVndaPedidos,
    vndaModal: reducerVndaModal
})
export default allReducers