
import Sidebar from "./componentes/Sidebar";
import Cabecera from "./componentes/Cabecera";
import "fontsource-open-sans";
import { useState } from "react";
import RouterOutlet from "./componentes/RouterOutlet";

const App = () => {
  const [sidebarAbierta, setSidebarAbierta] = useState(true);
  const toggle = () => setSidebarAbierta(!sidebarAbierta);

  return (
    <div className="contenedor">
      <Sidebar abierta={sidebarAbierta} onToggle={toggle} />
      <div className={`contenido ${sidebarAbierta ? "desplazado" : ""}`}>
        <Cabecera />
        <main className={`principal ${sidebarAbierta ? "desplazado" : ""}`}>
          <RouterOutlet />
        </main>
      </div>
    </div>
  );
}

export default App;
