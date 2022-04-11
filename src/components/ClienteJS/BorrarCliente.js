import React from "react";

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
    <>
      <div> Ingrese id para borrar, luego actualice la BD</div>
      <input type="text" name="delete" id="delete" />
      <button onClick={() => deleteEstudiante()}>Borrar</button>
    </>
  );
}

export default Borrar;
