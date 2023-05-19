import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  eliminarProductoPorId,
  clearCartAlert,
  totalPrice,
  navigate,
}) => {
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart.map((producto) => {
            return (
              <div key={producto.id} style={{ border: "2px solid black" }}>
                <h2>
                  {producto?.marca} {producto?.modelo}
                </h2>
                <h2>{producto?.quantity}</h2>

                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => eliminarProductoPorId(producto.id)}
                >
                  borrar producto
                </Button>
              </div>
            );
          })}
          <Button variant="contained" onClick={clearCartAlert}>
            Limpiar carrito
          </Button>
          <Button variant="contained" onClick={() => navigate("/checkout")}>
            Terminar compra
          </Button>
          <h1>El total del carrito es ${totalPrice}</h1>
        </div>
      ) : (
        <div className="emptyCart">
          <Button variant="contained">
            <Link to={"/"} className="link">
              Agregar productos
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
