import { Link, useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext"

const Header=()=>{
    const {isAuthenticated,setIsAuthenticated}=useAuth();
    const navigate=useNavigate();

    const handleLogout=()=>{
        setIsAuthenticated(false);
        navigate("/login");
    }

    return (
        <>
        <h2 style={{fontWeight:"bolder",backgroundColor:"pink",padding:10}}>EcoTrack</h2>
        <nav style={{display:"flex", gap:5}} >
            <Link style={{color:"black"}} to="/">Dashboard</Link>
            <Link style={{color:"black"}} to="/logs">Logs</Link>
            <Link style={{color:"black"}} to="/support">Support</Link>
            {isAuthenticated?(<button style={{color:"black",cursor:"pointer"}} onClick={handleLogout}>Logout</button>):(<Link style={{color:"black"}} to="/login">Log In</Link>)}
        </nav>
        </>
    )
};
export default Header;