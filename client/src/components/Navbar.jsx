import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout()
  const handleClick = () => {
    logout()
  }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>
            Logout
            </button>
          </div>
          <Link to="/Login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
