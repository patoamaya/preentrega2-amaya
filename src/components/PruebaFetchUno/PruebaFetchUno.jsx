import React from "react";
import useFetch from "../../utils/hooks/useFetch";

const PruebaFetchUno = () => {
  const { data } = useFetch("http://jsonplaceholder.typicode.com/users", []);

  return (
    <div>
      {data?.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}{" "}
      aca termina el 1
    </div>
  );
};

export default PruebaFetchUno;
