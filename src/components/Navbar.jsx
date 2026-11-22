
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">

      <div className="navbar-start">
        <NavLink to="/" className="text-2xl font-extrabold">
          <span className="text-primary">dev</span>
          <span className="text-secondary">Tinder</span>
          <span className="ml-1">♥</span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <NavLink to="/login" className="btn btn-primary rounded-full px-6">
          Login
        </NavLink>
      </div>

    </div>
  );
};

export default Navbar;
