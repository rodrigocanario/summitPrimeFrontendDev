import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Admin } from "./Screens/Admin/Admin";
import { Error } from "./Screens/SummitPrime/Error";
import { Orcamento } from "./Screens/SummitPrime/Controller";
import { Vnda } from "./Screens/Vnda/Vnda";
import { VndaCarrinhosPerdidos } from "./Screens/Vnda/VndaCarrinhosPerdidos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Orcamento} exact />
        <Route path="/vnda/pedidos" component={Vnda} />
        <Route
          path="/vnda/carrinhosPerdidos"
          component={VndaCarrinhosPerdidos}
        />
        <Route path="/admin" component={Admin} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
