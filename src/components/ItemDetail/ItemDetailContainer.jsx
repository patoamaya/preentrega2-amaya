import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../productsMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  // let id = 3;

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    let encontrado = products.find((product) => product.id === +id);
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
