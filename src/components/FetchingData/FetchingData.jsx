import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const [data, setData] = useState([]);
  const [dataById, setDataById] = useState({});

  useEffect(() => {
    const obtenerPost = fetch("https://jsonplaceholder.typicode.com/posts");

    obtenerPost
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return setData(res);
      });

    const obtenerPorId = fetch("https://jsonplaceholder.typicode.com/posts/2");
    obtenerPorId
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return setDataById(res);
      });
  }, []);

  const crearNuevoPost = () => {
    const crearPost = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      // headers: {
      // Acá se pone la informacion que queremos pasarle, si tenemos autorizacion, el token de autenticacion, etc
      body: JSON.stringify({
        userId: 7,
        title: "Estoy creando un post",
        body: "Prueba del verbo post desde el front",
      }),
    });

    // No es necesario manejar esta promesa porque la estamos mandando, no recibiendo. En caso de que quisieramos manejarla para ver qué estamos mandando, se puede hacer como aparece aca abajo
    // crearPost
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     return console.log(res);
    //   });
  };

  const editarUser = () => {
    // Hay que especificarle qué usuario queremos eliminar o modificar, en este caso, el 2
    fetch("https://jsonplaceholder.typicode.com/users/2", {
      method: "PATCH",
      body: JSON.stringify({
        name: "Mario Alberto",
      }),
    });
  };
  console.log(data);
  console.log(dataById);
  return (
    <div>
      <h1>Peticiones</h1>
      <button onClick={crearNuevoPost}>Crear post</button>
      <button onClick={editarUser}>cambiar nombre</button>
    </div>
  );
};

export default FetchingData;
