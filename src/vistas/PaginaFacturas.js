import { useEffect } from "react";
import store from "../store/store";

const PaginaFacturas = () => {
    useEffect(() => store.dispatch({ type: "setTitulo", payload: "Listado de facturas" }), []);
    return (
        <p>facturas</p>
    )
}

export default PaginaFacturas;