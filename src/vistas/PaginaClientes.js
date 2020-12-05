import { useEffect } from "react";
import store from "../store/store";

const PaginaClientes = () => {
    useEffect(() => {
        store.dispatch({ type: "setTitulo", payload: "Listado de clientes" });
    }, []);
    return (
        <p>Clientes</p>
    )
}

export default PaginaClientes;