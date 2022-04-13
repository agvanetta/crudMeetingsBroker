import React from 'react'
import ListarTodos from './ReunionesJs/ListarTodosReunion';
import ActualizarCliente from './ReunionesJs/ActualizarReunion';
import CrearCliente from './ReunionesJs/CrearReunion';
import BorrarCliente from './ReunionesJs/BorrarReunion';
import "./HomeClientes.css";
import BuscarPorId from './ReunionesJs/BuscarPorIdReunion';

function HomeClientes() {
  return (
    <div className='home'>
        <BuscarPorId/>
        <ActualizarCliente/>
        <CrearCliente/>
        <BorrarCliente/>
        <ListarTodos/>
    </div>
  )
}

export default HomeClientes