import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMin from "./Paginas/sobreMin";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PagindaPadrao from "Componentes/PaginaPadrao";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PagindaPadrao />} >

          <Route index element={<Inicio />} />
          <Route path="Sobremin" element={<SobreMin />} />

        </Route>

        <Route path="*" element={<h1>Paginda não encontrada</h1>} />

      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default App;
