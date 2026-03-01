import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink to="/dashboard" className="navbar-link">
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/water" className="navbar-link">
          Water Tracker
        </NavLink>
      </div>
      <button type="button" onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
