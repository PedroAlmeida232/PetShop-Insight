import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sobre" element={<Sobre />} />
        <Route path='/produtos' element={<Produtos />} /> */}
      </Routes>
    </BrowserRouter>
 
  )
}

export default App
