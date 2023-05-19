import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const CartContainer = () => {
  const navigate = useNavigate();
  const { cart, eliminarProductoPorId, totalPrice, limpiarCarrito } =
    useContext(CartContext);

  let total = totalPrice();

  const clearCartAlert = () => {
    Swal.fire({
      title: "Está seguro de querer vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Vaciar",
      denyButtonText: `No vaciar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        limpiarCarrito();
        Swal.fire("Carrito vaciado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se ha vaciado el carrito", "", "error");
      }
    });
  };

  return (
    <div>
      <Cart
        cart={cart}
        eliminarProductoPorId={eliminarProductoPorId}
        totalPrice={total}
        clearCartAlert={clearCartAlert}
        navigate={navigate}
      />
    </div>
  );
};

export default CartContainer;
