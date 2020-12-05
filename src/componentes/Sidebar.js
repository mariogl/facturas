import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-inner">
                <h1 className="nombre-app">Factureitor</h1>
                <nav className="menu-principal">
                    <ul class="paginas">
                        <li><NavLink activeClassName="activo" to="/inicio" exact>Inicio</NavLink></li>
                        <li><NavLink activeClassName="activo" to="/facturas">Facturas</NavLink></li>
                        <li><NavLink activeClassName="activo" to="/gastos">Gastos</NavLink></li>
                        <li><NavLink activeClassName="activo" to="/clientes">Clientes</NavLink></li>
                        <li><NavLink activeClassName="activo" to="/proveedores">Proveedores</NavLink></li>
                        <li><NavLink activeClassName="activo" to="/categorias">Categorías</NavLink></li>
                        <li><NavLink activeClassName="activo" to="/estadisticas">Estadísticas</NavLink></li>
                    </ul>
                    <i class="usuario"><FontAwesomeIcon icon={faUser} /></i>
                </nav>
                <i className="toggle-sidebar"><FontAwesomeIcon icon={faCaretLeft} /></i>
            </div>
        </aside>
    )
}

export default Sidebar;