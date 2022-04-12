import React from 'react'
import ListarTodos from './ClienteJS/ListarTodosClientes';
import ActualizarCliente from './ClienteJS/ActualizarCliente';
import CrearCliente from './ClienteJS/CrearCliente';
import BorrarCliente from './ClienteJS/BorrarCliente';
import "./HomeClientes.css";
import BuscarPorId from './ClienteJS/BuscarPorIdCliente';

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