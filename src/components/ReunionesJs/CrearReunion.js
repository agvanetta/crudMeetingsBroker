import React, { useState } from "react";
import "../styles/Crear.css"


let urlApi = "http://localhost:8080/reuniones"; // url que enviaremos a fetch

function resetUploadForm() {
  document.querySelector("#idCliente").value = "";
  document.querySelector("#idAsesor").value = "";
  document.querySelector("#idFecha").value = "";
}

function Crear() {
  //Objeto que enviaremos por fetch

  const [datav2, setData] = useState([]);

  function CallApi() {
    let clienteValor = document.querySelector("#idCliente").value;
    let asesorValor = document.querySelector("#idAsesor").value;
    let fechaValor = document.querySelector("#idFecha").value;

    const reunionData = {
      "cliente": {            "id": clienteValor        },
      "asesor": {            "id": asesorValor        },
      "fecha": fechaValor
  }
    let settings = {
      method: "POST",
      body: JSON.stringify(reunionData),
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
      <h3 style={{ marginTop: "10px", marginBotton: "10px" }}>Crear Reunion</h3>
      <div className="crear__opciones">
        <label className="label" key={1} htmlFor="nombre">{" "} Id Cliente: <input key={2} type="text" name="nombre" id="idCliente" />{" "} </label>
        <label className="label" key={3} htmlFor="Apellido">{" "} Id Asesor: <input key={4} type="text"   name="apellido" id="idAsesor" />{" "}</label>
        <label className="label" key={5} htmlFor="Apellido">{" "} Fecha: <input key={6} type="text"   name="fec" id="idFecha" />{" "}</label>
           <input          className="buttom"          type="button"          value="Crear"          onClick={() => CallApi()}        />
        <div> {datav2}</div>
      </div>
    </div>
  );
}

export default Crear;
