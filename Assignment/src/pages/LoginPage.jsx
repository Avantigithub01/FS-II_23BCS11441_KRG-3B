import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "ecotrack-demo-token");
    navigate("/dashboard");
  };

  return (
    <main className="page centered-page">
      <div className="card">
        <h1>EcoTrack Login</h1>
        <p>Click to create a demo session.</p>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </main>
  );
}

export default LoginPage;
