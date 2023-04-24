import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../productsMock";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let id = 2;

  useEffect(() => {
    let encontrado = products.find((product) => product.id === id);
    setProduct(encontrado);
  }, [id]);
  console.log(product);
  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
