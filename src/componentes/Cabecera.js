import "./Cabecera.scss";

const Cabecera = props => {
    const { tituloPagina } = props;
    return (
        <header class="cabecera">
            <h2>{tituloPagina}</h2>
        </header>
    )
}

export default Cabecera;