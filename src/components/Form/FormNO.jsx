import React, { useState } from "react";

const FormNO = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const envioDeFormulario = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Escriba su nombre aca"
          //   value={nombre}
          name="nombre"
          onChange={(e) => {
            setNombre(e.target.value);
            console.log(nombre);
          }}
        />
        <input
          type="text"
          placeholder="Escriba su apellido aca"
          //   value={nombre}
          name="apellido"
          onChange={(e) => {
            setApellido(e.target.value);
            console.log(apellido);
          }}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default FormNO;
