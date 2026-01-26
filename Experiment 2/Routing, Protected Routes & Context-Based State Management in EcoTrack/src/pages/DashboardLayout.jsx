// pages/DashboardLayout.jsx
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <nav>
        <div style={{display:"flex", gap:"14px"}}>
          <Link to="summary" >Summary</Link>
          <Link to="analytics">Analytics</Link>
        </div>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
