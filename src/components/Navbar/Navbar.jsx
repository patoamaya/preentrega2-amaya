import { Outlet, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
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
          <Link to={"/"} className="link">
            Todos los vehículos
          </Link>
          <Link to={"/category/suv"} className="link">
            SUV'S
          </Link>
          <Link to="/category/auto" className="link">
            Autos
          </Link>
          <CartWidget cantidad={0} />
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
