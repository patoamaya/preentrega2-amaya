import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";
import Button from "@mui/material/Button";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  // const [isDeleted, setIsDeleted] = useState(false);
  // const [isUpdated, setIsUpdated] = useState(false);
  // const [isPosted, setIsPosted] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setIsChanged(false);
    // setIsDeleted(false);
    // setIsUpdated(false);
    // setIsPosted(false);
    let data = axios.get("http://localhost:5000/products");
    data.then((res) => {
      return setItems(res.data);
    });
  }, [isChanged]);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    setIsChanged(true);
  };

  const updateProduct = (id, data) => {
    axios.patch(`http://localhost:5000/products/${id}`, data);
    setIsChanged(true);
  };
  const createProduct = (data) => {
    axios.post("http://localhost:5000/products", data);
    setIsChanged(true);
  };
  return (
    <div>
      <ItemList
        items={items}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
      />
      <Button
        variant="contained"
        size="medium"
        onClick={() =>
          createProduct({
            marca: "Honda",
            stock: 2,
            modelo: "Civic",
            version: "SI",
            año: "2008",
            color: "Negro",
            kms: "140.000",
            precio: "4.600.000",
            categoria: "auto",
            ubicacion: "Belgrano | CABA",
            img: "https://res.cloudinary.com/dx4qsxcb7/image/upload/v1682302315/autos/civic_mjgohs.jpg",
          })
        }
      >
        Crear producto
      </Button>
    </div>
  );
};

export default ItemListContainer;
