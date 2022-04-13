import React, { useState } from "react";
import "../styles/Listar.css"


function ListarTodos() {
  const urlApi = "http://localhost:8080/reuniones/todas";
  const [datav2, setData] = useState([]);

  let settings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; chartset=UTF-8",
    },
  };

  function getClientes() {
    fetch(urlApi, settings)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData([data]);
      })
      .catch((error) => {
        console.log("Ocurrio un error al llamar a la API", error);
      });
  }

  return (
    <div className="listar">
      <h3>Listar Todas</h3>
      <button className="buttom" onClick={() => getClientes()}> Listar </button>
      {datav2.length !== 0 ? (
        <div>
          {datav2[0].map((obj, index) => ( 
            <div key={index} className="busqueda__data">  ID Reunion:  {obj.id} | Asesor: {obj.asesor.nombre}, {obj.asesor.apellido} ID {obj.asesor.id} .
         Cliente: {obj.cliente.nombre}, {obj.cliente.apellido} ID {obj.cliente.id}. Fecha: {obj.fecha} </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ListarTodos;
