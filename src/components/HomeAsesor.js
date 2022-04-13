import React from 'react'
import ListarTodos from './AsesorJs/ListarTodosAsesoress';
import Modificar from './AsesorJs/ActualizarAsesor';
import Crear from './AsesorJs/CrearAsesor';
import Borrar from './AsesorJs/BorrarAsesor';
import "./HomeClientes.css";
import BuscarPorId from './AsesorJs/BuscarPorIdAsesor';

function HomeClientes() {
  return (
    <div className='home'>
        <BuscarPorId/>
        <Modificar/>
        <Crear/>
        <Borrar/>
        <ListarTodos/>
    </div>
  )
}

export default HomeClientes