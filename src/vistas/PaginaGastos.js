import { useEffect } from "react";
import store from "../store/store";

const PaginaGastos = () => {
    useEffect(() => store.dispatch({ type: "setTitulo", payload: "Listado de gastos" }));
    return (
        <p>Gastos</p>
    )
}

export default PaginaGastos;