//Site para front: https://uiverse.io/

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Paginas/login';
import Home from './Paginas/Home';
import Perfil from './Paginas/Perfil';  // Novo componente Perfil
import TabelMar from './Paginas/TabelMar';
import Index from './Paginas/AdiCorretor/Index';
import Agenciamento from './Paginas/AdiAgenciamento/Agenciamento'
import Trimestral from './Paginas/Trimestral';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/TabelMar" element={<TabelMar />} />
        <Route path="/Index" element={<Index />} />
        <Route path="/Agenciamento" element={<Agenciamento />} />
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redireciona para login */}
        <Route path="/Trimestral" element={<Trimestral />} />
      </Routes>
    </Router>
  );
}

export default App;


//
//<Route path="/controle-trimestral" element={<ControleTrimestral />} />
//<Route path="/controle-semestral" element={<ControleSemestral />} />
//<Route path="/controle-anual" element={<ControleAnual />} />