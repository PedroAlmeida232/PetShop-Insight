import Home from './pages/Home.jsx'
import Produtos from './pages/Produtos.jsx';
import Sobre from './pages/Sobre.jsx';
import Contatos from './pages/Contatos.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/contatos' element={<Contatos />} />
      </Routes>
    </BrowserRouter>
 
  )
}

export default App
