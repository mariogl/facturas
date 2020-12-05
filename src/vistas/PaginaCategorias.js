import { useEffect } from "react";
import store from "../store/store";

const PaginaCategorias = () => {
    useEffect(() => store.dispatch({ type: "setTitulo", payload: "Listado de categorías" }), []);
    return (
        <p>categorías</p>
    )
}

export default PaginaCategorias;