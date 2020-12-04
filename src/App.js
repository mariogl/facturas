import { Redirect, Route, Switch } from "react-router-dom";
import Pagina404 from "./vistas/Pagina404";
import PaginaInicio from "./vistas/PaginaInicio";

const App = () => {
  return (
    <Switch>
      <Route path="/inicio">
        <PaginaInicio />
      </Route>
      <Route path="/" exact>
        <Redirect to="/inicio" />
      </Route>
      <Route>
        <Pagina404 />
      </Route>
    </Switch>
  );
}

export default App;
