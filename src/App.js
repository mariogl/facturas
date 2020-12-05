import { Redirect, Route, Switch } from "react-router-dom";
import Sidebar from "./componentes/Sidebar";
import Cabecera from "./componentes/Cabecera";
import Pagina404 from "./vistas/Pagina404";
import PaginaInicio from "./vistas/PaginaInicio";
import "fontsource-open-sans";

const App = () => {
  return (
    <div className="contenedor">
      <Sidebar />
      <Cabecera tituloPagina="Listado de facturas" />
      <main class="principal">
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
      </main>
    </div>
  );
}

export default App;
