import { connect } from "react-redux";
import "./Cabecera.scss";

const Cabecera = props => {
    const { tituloPagina } = props;
    return (
        <header className="cabecera">
            <h2>{tituloPagina}</h2>
        </header>
    )
}

const mapStateToProps = state => {
    const tituloPagina = state.titulo || "";
    return { tituloPagina };
}

export default connect(mapStateToProps)(Cabecera);