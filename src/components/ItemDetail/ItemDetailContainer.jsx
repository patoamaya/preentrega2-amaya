import React, { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);
  // let id = 3;

  let { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);
  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Su ${product.marca} ${product.modelo} año ${product.año} ha sido agregado satisfactoriamente al carrito.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  let cantidadTotal = getQuantityById(product.id);
  return (
    <div>
      <ItemDetail
        product={product}
        onAdd={onAdd}
        cantidadTotal={cantidadTotal}
      />
    </div>
  );
};

export default ItemDetailContainer;
