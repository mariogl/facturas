import { useEffect } from "react";
import store from "../store/store";

const Pagina404 = () => {
    useEffect(() => store.dispatch({ type: "setTitulo", payload: "No encontrado" }), []);
    return (
        <p>No encontrado</p>
    )
}

export default Pagina404;