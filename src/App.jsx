import Cadastro from './paginas/cadastro/Cadastro';
import Homepage from './paginas/homepage/Homepage';
import Estoque from './paginas/estoque/Estoque';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Editar from './paginas/editar/Editar';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />

      <Route path='/cadastro' element={<Cadastro/>} />

      <Route path='/estoque' element={<Estoque/>} />

      <Route path='/editar/:id' element={<Editar/>} />


    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
