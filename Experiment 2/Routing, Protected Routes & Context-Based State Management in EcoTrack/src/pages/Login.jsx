// pages/Login.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    setIsAuth(true);
    navigate("/");
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login to Ecotrack</button>
    </div>
  );
};

export default Login;
