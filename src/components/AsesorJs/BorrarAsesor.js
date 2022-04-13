import React, { useState } from "react";
import "../styles/Borrar.css"


function Borrar() {
  const [datav2, setData] = useState([]);

  function resetUploadForm() {
    document.querySelector("#delete").value = "";
  }
  const settings = {
    method: "DELETE",
  };

  function deleteA() {
    const id = document.querySelector("#delete").value;
    const urlApi = "http://localhost:8080/asesores/" + id;
    fetch(urlApi, settings).then((response) => response.json());
    resetUploadForm();
    setData("Borrado exitoso")
  }

  return (
    <div className="borrar">
      <h3> Ingrese id para borrar</h3>
      <div>
        <input className="label" type="text" name="delete" id="delete" />
        <button className="buttom" onClick={() => deleteA()}>Borrar</button>
        <div> {datav2} </div>
      </div>
    </div>
  );
}

export default Borrar;
