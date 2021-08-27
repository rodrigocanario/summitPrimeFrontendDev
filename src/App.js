import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Admin } from './Screens/Admin/Admin';
import { Error } from './Screens/Error';
import { Orcamento } from './Screens/Orcamento';
import { Vnda } from './Screens/Vnda/Vnda';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Orcamento} exact />
        <Route path='/vnda' component={Vnda} />
        <Route path='/admin' component={Admin} />
        <Route path='*' component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
