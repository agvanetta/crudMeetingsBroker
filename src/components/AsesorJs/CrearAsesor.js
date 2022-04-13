import React, { useState } from "react";
import "../styles/Crear.css"

let urlApi = "http://localhost:8080/asesores"; // url que enviaremos a fetch

function resetUploadForm() {
  document.querySelector("#nombre").value = "";
  document.querySelector("#apellido").value = "";
}

function Crear() {
  //Objeto que enviaremos por fetch

  const [datav2, setData] = useState([]);

  function CallApi() {
    let nombreValor = document.querySelector("#nombre").value;
    let apellidoValor = document.querySelector("#apellido").value;
    let clienteData = {
      apellido: apellidoValor, //Captura datos de la vista "apellido"
      nombre: nombreValor, //Captura datos de la vista "nombre"
    };
    let settings = {
      method: "POST",
      body: JSON.stringify(clienteData),
      headers: {
        "Content-Type": "application/json; chartset=UTF-8",
      },
    };
    fetch(urlApi, settings)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log("Ocurrio un error al llamar a la API", error);
      });
    resetUploadForm();
    setData("Cliente creado");
  }

  return (
    <div className="crear">
      <h3 style={{ marginTop: "10px", marginBotton: "10px" }}>Crear Asesor</h3>
      <div className="crear__opciones">
        <label className="label" key={1} htmlFor="nombre">
          {" "}
          Nombre: <input key={2} type="text" name="nombre" id="nombre" />{" "}
        </label>
        <label className="label" key={3} htmlFor="Apellido">
          {" "}
          Apellido: <input
            key={4}
            type="text"
            name="apellido"
            id="apellido"
          />{" "}
        </label>
        <input
          className="buttom"
          type="button"
          value="Crear"
          onClick={() => CallApi()}
        />
        <div> {datav2}</div>
      </div>
    </div>
  );
}

export default Crear;
