import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Catalogo from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';
import Contacto from './components/Contacto';
import Error from './components/Error';


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/catalogo' element={<Catalogo/>}/>
            <Route path='/catalogo/:id' element={<DetalleProducto/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/*' element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App