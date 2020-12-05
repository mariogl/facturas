import { useEffect } from "react";
import store from "../store/store";

const PaginaProveedores = () => {
    useEffect(() => store.dispatch({ type: "setTitulo", payload: "Listado de proveedores" }), []);
    return (
        <p>proveedores</p>
    )
}

export default PaginaProveedores;