import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="containerNavbar">
      <ul>
        <img
          src="https://res.cloudinary.com/dx4qsxcb7/image/upload/v1680464348/logo_eibrs2.png"
          alt="Logo"
          id="logo"
        />
        <li>Productos</li>
        <li>Nosotros</li>
        <li>Contactenos</li>
        <CartWidget cantidad={0} />
      </ul>
    </div>
  );
};
