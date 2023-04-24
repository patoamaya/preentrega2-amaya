import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const reiniciar = () => {
    setCounter(0);
  };
  return (
    <div>
      <Counter
        counter={counter}
        sumar={sumar}
        restar={restar}
        reiniciar={reiniciar}
      />
    </div>
  );
};

export default CounterContainer;
