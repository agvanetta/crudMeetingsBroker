import React from 'react'
import "./Sidebar.css";


function Sidebar() {
  return (
      <>
    <div className='sidebar'>
        <div className='sidebar__options'>Clientes</div>
        <div className='sidebar__options'>Asesores</div>
        <div className='sidebar__options'>Reuniones</div>
    </div>
    <div className='side'>Desarrollo Agustin Vanetta</div>
    </>
  )
}

export default Sidebar