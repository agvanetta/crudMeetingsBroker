import React from 'react'
import "../styles/Actualizar.css"

function resetUploadForm(){
    document.querySelector('#idMod').value = "";
    document.querySelector('#nombreMod').value = "";
    document.querySelector('#apellidoMod').value = "";
}
let urlApi = "http://localhost:8080/asesores"; // url que enviaremos a fetch

function ejecutar() {
    let nombreValor = document.querySelector("#nombreMod").value
    let apellidoValor = document.querySelector("#apellidoMod").value
    let idValor = document.querySelector("#idMod").value

    //Objeto que enviaremos por fetch
    const asesoresData = {
      id: idValor,
      apellido: apellidoValor, //Captura datos de la vista "apellido"
      nombre: nombreValor, //Captura datos de la vista "nombre"
    }
  
    const settings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; chartset=UTF-8"
      },
      body: JSON.stringify(asesoresData)
    }
    
    fetch(urlApi, settings)
      .then(response => {return response.json()})
      .catch(error => {console.log("Ocurrio un error al llamar a la API", error)    })
      resetUploadForm()
  }

function Modificar() {
  return (
    <div className='actualizar'>
      <h3 style={{ marginTop: "10px", marginBotton: "10px" }}>Modificar Asesor</h3>
      <div className='actualizar__opciones'>
        <label className='label' key={1} htmlFor="id">  Id: <input key={2} type="text" name="id" id="idMod" />  </label>
        <label className='label' key={3} htmlFor="nombre">  Nombre: <input key={4} type="text" name="nombre" id="nombreMod" />  </label>
        <label className='label' key={5} htmlFor="apellido"> Apellido: <input key={6} type="text" name="apellido" id="apellidoMod" />   </label>
        <input className="buttom" type="button" value="Modificar" onClick={() => ejecutar()} />
      </div>
    </div>
  )
}

export default Modificar;