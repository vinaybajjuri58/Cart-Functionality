import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/products">
        <button className="button button-primary">products</button>
      </NavLink>
      <NavLink to="/cart">
        <button className="button button-primary">cart</button>
      </NavLink>
      <NavLink to="/dummy">
        <button className="button button-primary">dummy</button>
      </NavLink>
    </div>
  );
};
