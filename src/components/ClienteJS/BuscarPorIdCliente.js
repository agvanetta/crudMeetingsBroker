import React, { useState } from "react";

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
    <>
      <div> Ingrese id para buscar</div>
      <input type="text" name="idcliente" id="idcliente" />
      <button onClick={() => getCliente()}>Buscar</button>
      <div>
      {datav2.length !== 0 ? (<div > {datav2[0].nombre} </div>    )
      : 
      (        ""      )}
      </div>
    </>
  );
}

export default BuscarPorId;