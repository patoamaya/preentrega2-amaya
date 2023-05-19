import { CardMedia } from "@mui/material";
import React from "react";
import "./ItemDetail.css";
import CounterContainer from "../Counter/CounterContainer";

const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
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
        <h3>Disponibilidad: {product.stock} Unidad/es</h3>
        <CounterContainer
          stock={product.stock}
          onAdd={onAdd}
          initial={cantidadTotal}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
