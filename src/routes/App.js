
import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navegacion } from '../layouts/Navegacion';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import { ProductosCreados } from '../pages/ProductosCreados';
import { ProductoDetalle } from '../pages/ProductoDetalle';

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path='/' element={<ProductosCreados />}/>
        <Route path='producto/:id' element={<ProductoDetalle />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
