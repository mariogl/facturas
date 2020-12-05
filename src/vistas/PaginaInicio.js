import { useEffect } from "react";
import store from "../store/store";

const PaginaInicio = () => {
    useEffect(() => store.dispatch({ type: "setTitulo", payload: "Inicio" }), []);
    return (
        <p>Inicio</p>
    )
}

export default PaginaInicio;