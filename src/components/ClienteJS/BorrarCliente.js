import React from "react";
import "./Borrar.css";

function Borrar() {
  function resetUploadForm() {
    document.querySelector("#delete").value = "";
  }
  const settings = {
    method: "DELETE",
  };

  function deleteEstudiante() {
    const id = document.querySelector("#delete").value;
    const urlApi = "http://localhost:8080/clientes/" + id;
    fetch(urlApi, settings).then((response) => response.json());
    resetUploadForm();
  }

  return (
    <div className="borrar">
      <h3> Ingrese id para borrar, luego actualice la BD</h3>
      <div>
        <input className="label" type="text" name="delete" id="delete" />
        <button className="buttom" onClick={() => deleteEstudiante()}>Borrar</button>
      </div>
    </div>
  );
}

export default Borrar;
