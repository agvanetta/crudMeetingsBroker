import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomeClientes from './components/HomeClientes';
import HomeAsesor from './components/HomeAsesor';
import HomeReuniones from './components/HomeReuniones';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <Router  >
      <div className="app">
        <Routes>
          <Route path="/" element={<>{" "}<Header /> <HomeClientes/> <Sidebar/>{" "}</> }  />
          <Route path="/clientes" element={<>{" "}<Header /> <HomeClientes/> <Sidebar/>{" "}</> }  />
          <Route path="/asesores"    element={  <>  {" "} <Header /> <HomeAsesor/> <Sidebar/>{" "}  </> } />
          <Route path="/reuniones" element={   <>{" "}  <Header /> <HomeReuniones/> <Sidebar/> {" "} </> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
