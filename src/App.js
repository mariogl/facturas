import { Redirect, Route, Switch } from "react-router-dom";
import Sidebar from "./componentes/Sidebar";
import Cabecera from "./componentes/Cabecera";
import Pagina404 from "./vistas/Pagina404";
import PaginaInicio from "./vistas/PaginaInicio";
import PaginaFacturas from "./vistas/PaginaFacturas";
import PaginaGastos from "./vistas/PaginaGastos";
import PaginaClientes from "./vistas/PaginaClientes";
import PaginaProveedores from "./vistas/PaginaProveedores";
import PaginaCategorias from "./vistas/PaginaCategorias";
import PaginaEstadisticas from "./vistas/PaginaEstadisticas";
import "fontsource-open-sans";

const App = () => {
  return (
    <div className="contenedor">
      <Sidebar />
      <Cabecera />
      <main className="principal">
        <Switch>
          <Route path="/inicio">
            <PaginaInicio />
          </Route>
          <Route path="/facturas">
            <PaginaFacturas />
          </Route>
          <Route path="/gastos">
            <PaginaGastos />
          </Route>
          <Route path="/clientes">
            <PaginaClientes />
          </Route>
          <Route path="/proveedores">
            <PaginaProveedores />
          </Route>
          <Route path="/categorias">
            <PaginaCategorias />
          </Route>
          <Route path="/estadisticas">
            <PaginaEstadisticas />
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
