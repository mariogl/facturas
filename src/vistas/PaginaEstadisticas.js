import { useEffect } from "react";
import store from "../store/store";

const PaginaEstadisticas = () => {
    useEffect(() => {
        store.dispatch({ type: "setTitulo", payload: "Listado de estadísticas" });
    }, []);
    return (
        <p>Estadísticas</p>
    )
}

export default PaginaEstadisticas;