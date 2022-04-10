import React, { useState } from "react";

function ListarTodos() {
  const urlApi = "http://localhost:8080/estudiantes/todos";
  const [datav2, setData] = useState([]);

  let settings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; chartset=UTF-8",
    },
  };

  function getEstudiantes() {
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
    <>
      <div>Listar Todos</div>
      <button onClick={() => getEstudiantes()}> Listar </button>
      {datav2.length !== 0 ? (
        <div>
          {datav2[0].map((obj, index) => (
            <div key={index}> {obj.nombre}</div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ListarTodos;
