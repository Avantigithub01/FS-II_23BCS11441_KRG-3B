// components/Header.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { isAuth, setIsAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f4f8",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>Ecotrack</h2>

      <nav style={{ display: "flex", gap: "12px" }}>
        {isAuth && <Link to="/">Dashboard</Link>}

        {isAuth ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
