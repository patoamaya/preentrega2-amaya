import { Outlet, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((categoria) => {
          return {
            ...categoria.data(),
            id: categoria.id,
          };
        });
        setCategories(categoriesResult);
      })
      .catch((err) => err);
  });

  return (
    <div>
      <div className="containerNavbar">
        <ul>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dx4qsxcb7/image/upload/v1680464348/logo_eibrs2.png"
              alt="Logo"
              id="logo"
            />
          </Link>

          {categories.map((categoria) => {
            return (
              <Link key={categoria.id} to={categoria.path}>
                {categoria.title}
              </Link>
            );
          })}

          <Link to="/cart" className="link">
            <CartWidget />
          </Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
