import React, { useState } from "react";
import "./BuscarPorIdCliente.css";


function BuscarPorId() {
  function resetUploadForm() {
    document.querySelector("#idcliente").value = "";
  }
  const [datav2, setData] = useState([]);

  let settings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; chartset=UTF-8",
    },
  };

  function getCliente() {
  const id = document.querySelector("#idcliente").value;
  const urlApi = "http://localhost:8080/clientes/"+id;
    fetch(urlApi, settings)
      .then((response) => {        return response.json();      })
      .then((data) => {        setData([data]);      })
      resetUploadForm();
  }

  return (
    <div className="busqueda">
      <h3>Ingrese id para buscar :</h3>
      <div>
        <input type="text" name="idcliente" id="idcliente" />
        <button className="busqueda_buttom" onClick={() => getCliente()}>Buscar</button>
      </div>
      <div>
      {datav2.length !== 0 ? (
        <div className="busqueda__data"> ID:  {datav2[0].id} | {datav2[0].nombre}, {datav2[0].apellido}</div>
        )
      : 
      (        ""      )}
      </div>
    </div>
  );
}

export default BuscarPorId;