import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (product) => {
    let existe = isInCart(product.id);

    if (existe) {
      const nuevoCart = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(nuevoCart);
    } else {
      setCart([...cart, product]);
    }
  };
  const limpiarCarrito = () => {
    setCart([]);
  };
  const eliminarProductoPorId = (id) => {
    const productosFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(productosFiltrados);
  };
  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const totalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.precio * elemento.quantity;
    }, 0);
    return total;
  };
  const widgetTotal = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };
  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };
  let data = {
    agregarAlCarrito,
    cart,
    limpiarCarrito,
    eliminarProductoPorId,
    totalPrice,
    widgetTotal,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
