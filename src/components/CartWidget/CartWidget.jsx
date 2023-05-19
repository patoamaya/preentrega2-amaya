import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({ cantidad }) => {
  const { widgetTotal } = useContext(CartContext);
  let total = widgetTotal();
  {
    return (
      total > 0 && (
        <div>
          <BsCart4 />
          <span>{total}</span>
        </div>
      )
    );
  }
};

export default CartWidget;
