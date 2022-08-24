import Cadastro from './paginas/cadastro/Cadastro';
import Homepage from './paginas/homepage/Homepage';
import Estoque from './paginas/estoque/Estoque';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Editar from './paginas/editar/Editar';
import Venda from './paginas/venda/Venda';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />

      <Route path='/cadastro' element={<Cadastro/>} />

      <Route path='/estoque' element={<Estoque/>} />

      <Route path='/editar/:id' element={<Editar/>} />

      <Route path='/vendas' element={<Venda/>} />


    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
