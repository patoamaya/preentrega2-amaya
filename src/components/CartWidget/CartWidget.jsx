import React from "react";
import { BsCart4 } from "react-icons/bs";

const CartWidget = ({ cantidad }) => {
  return (
    <div>
      <BsCart4 />
      <span>{cantidad}</span>
    </div>
  );
};

export default CartWidget;
