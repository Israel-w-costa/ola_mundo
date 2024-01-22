import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMin from "./Paginas/sobreMin";
import Menu from "./Componentes/Menu";

function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="Sobremin" element={<SobreMin/>}/>
          <Route path="*" element={<h1>Paginda não encontrada</h1>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
