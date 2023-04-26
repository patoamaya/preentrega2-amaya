import { CardMedia } from "@mui/material";
import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="container">
      <CardMedia
        className="CardMedias"
        component="img"
        alt={product.marca}
        image={product.img}
      />
      <div className="textContainer">
        <h2>{product.marca}</h2>
        <h2>{product.modelo}</h2>
        <h2>{product.kms}kms</h2>
        <h2>{product.ubicacion}</h2>
        <h2>${product.precio}</h2>
      </div>
    </div>
  );
};

export default ItemDetail;
