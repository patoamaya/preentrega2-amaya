import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, initial) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    let getData = axios.get(endpoint);
    getData.then((res) => setData(res.data)).catch((err) => console.log(err));
  }, [endpoint]);

  return { data };
};

export default useFetch;

// Ejemplo de llamada a la funcion useFetch con inicio de un solo objeto:
// useFetch= ("https://jsonplaceholder.typicode.com/users/1", {})
