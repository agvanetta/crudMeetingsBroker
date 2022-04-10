import './App.css';
import Borrar from './components/Borrar';
import Crear from './components/Crear';
import ListarTodos from './components/ListarTodos';
import Actualizar from './components/Actualizar';

function App() {
  return (
    <div className="App">
      <Crear/>
      <ListarTodos/>
      <Borrar/>
      <Actualizar/>
    </div>
  );
}

export default App;
