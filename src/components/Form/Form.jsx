import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    contraseña: "",
  });

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log(userData);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(userData);
  };

  return (
    <div>
      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Escriba su nombre aca"
          value={userData.nombre}
          name="nombre"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Escriba su apellido aca"
          value={userData.apellido}
          name="apellido"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Escriba su nombre aca"
          value={userData.telefono}
          name="telefono"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default Form;
