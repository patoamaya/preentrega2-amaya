import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { DotLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const itemsCollectionFiltered = query(
        itemCollection,
        where("categoria", "==", categoryName)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div className="loader">
        <DotLoader color="#d636ae" size={107} />
      </div>
    );
  }

  return <ItemList items={items} />;
};
export default ItemListContainer;
