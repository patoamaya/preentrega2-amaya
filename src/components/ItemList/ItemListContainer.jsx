import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemList from "./ItemList";
import { products } from "../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  // const navigate = useNavigate();

  useEffect(() => {
    const productsFiltered = products.filter(
      (prod) => prod.categoria === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productsFiltered : products);
    });

    tarea.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [categoryName]);
  return <ItemList items={items} />;
};
export default ItemListContainer;
