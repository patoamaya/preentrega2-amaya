const Counter = ({ sumar, restar, reiniciar, counter }) => {
  return (
    <div>
      <h1>Contador</h1>
      <button onClick={sumar}>Sumar</button>
      <h2>{counter}</h2>
      <button onClick={restar}>Restar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export default Counter;
