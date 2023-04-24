import React from "react";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.marca}</h2>
      <h2>{product.modelo}</h2>
    </div>
  );
};

export default ItemDetail;
