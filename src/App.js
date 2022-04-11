import BorrarCliente from './components/ClienteJS/BorrarCliente';
import CrearCliente from './components/ClienteJS/CrearCliente';
import ListarTodosClientes from './components/ClienteJS/ListarTodosClientes';
import ActualizarCliente from './components/ClienteJS/ActualizarCliente';
import BuscarPorId from './components/ClienteJS/BuscarPorIdCliente';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomeClientes from './components/HomeClientes';

function App() {
  return (
    <div >
      <Header/>
      <HomeClientes/>
      <Sidebar/>
    </div>
  );
}

export default App;
