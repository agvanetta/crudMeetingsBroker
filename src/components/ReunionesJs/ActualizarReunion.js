import React from 'react'
import "../styles/Actualizar.css"

function resetUploadForm(){
    document.querySelector('#idR').value = "";
    document.querySelector('#idC').value = "";
    document.querySelector('#idA').value = "";
    document.querySelector('#reunion').value = "";
}
let urlApi = "http://localhost:8080/reuniones"; // url que enviaremos a fetch

function ejecutar() {
    let idValor = document.querySelector("#idR").value
    let idCliente= document.querySelector("#idC").value
    let idAsesor= document.querySelector("#idA").value
    let fecha = document.querySelector("#reunion").value

    //Objeto que enviaremos por fetch
    const reunionData = {
        "id": idValor,
        "cliente": {            "id": idCliente        },
        "asesor": {            "id": idAsesor        },
        "fecha": fecha
    }

    const settings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; chartset=UTF-8"
      },
      body: JSON.stringify(reunionData)
    }
    
    fetch(urlApi, settings)
      .then(response => {return response.json()})
      .catch(error => {console.log("Ocurrio un error al llamar a la API", error)    })
      resetUploadForm()
  }

function Modificar() {
  return (
    <div className='actualizar'>
      <h3 style={{ marginTop: "10px", marginBotton: "10px" }}>Modificar Reunion</h3>
      <div className='actualizar__opciones'>
        <label className='label' key={1} htmlFor="id">  Id Reunion que desea modificar: <input key={2} type="text" name="id" id="idR" />  </label>
      </div>
      <div className='actualizar__opciones'>
        <label className='label' key={3} htmlFor="id">  Id Cliente: <input key={4} type="text" name="id" id="idC" />  </label>
        <label className='label' key={5} htmlFor="id">  Id Asesor: <input key={6} type="text" name="id" id="idA" />  </label>
      <label className='label' key={7} htmlFor="nombre">  Fecha: <input key={8} type="text" name="nombre" id="reunion" />  </label>
      </div>
      <div className='actualizar__opciones'>
      <input className="buttom" type="button" value="Modificar" onClick={() => ejecutar()} />
      </div>
      
    </div>
  )
}

export default Modificar;