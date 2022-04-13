import React from 'react'
import "./Sidebar.css";
import { Link } from "react-router-dom";


function Sidebar() {
  return (
      <>
       <div className='sidebar'>
        <Link to="/clientes" className="links"> <div className='sidebar__options'>Clientes</div> </Link> 
        <Link to="/asesores" className="links"> <div className='sidebar__options'>Asesores</div> </Link> 
        <Link to="/reuniones" className="links"> <div className='sidebar__options'>Reuniones</div> </Link> 
       </div>
       <div className='side'>Desarrollo Agustin Vanetta</div>
    </>
  )
}

export default Sidebar