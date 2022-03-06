import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles.css';
import './components/products.css';
import NavBar from './components/NavBar.js';
import Remeras from './components/Remeras.js';
import Contacto from './components/Contacto.js';
import Home from './components/Home.js';
import Jeans from './components/Jeans.js';
import Pantalones from './components/Pantalones.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='remeras' element={<Remeras />} />
          <Route path='pantalones' element={<Pantalones />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='jeans' element={<Jeans />} />
          <Route path='api' element={<componentDidMount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
