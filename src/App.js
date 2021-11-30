import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Admin } from "./Screens/Admin/Admin";
import { Error } from "./Screens/SummitPrime/Error";
import { Controller } from "./Screens/SummitPrime/Controller";
// import { Vnda } from "./Screens/Vnda/Vnda";
import { VndaCarrinhosPerdidos } from "./Screens/Vnda/VndaCarrinhosPerdidos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Controller />} exact />
        {/* <Route path="/vnda/pedidos" component={Vnda} /> */}
        <Route
          path="/vnda/carrinhosPerdidos"
          element={<VndaCarrinhosPerdidos />}
        />
        <Route path="/admin" element={<VndaCarrinhosPerdidos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
