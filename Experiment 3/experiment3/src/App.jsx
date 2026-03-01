import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardSummary from "./pages/DashboardSummary";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import ProtectedRoute from "./routes/ProtectedRoute";
import Logs from "./pages/Logs";
import Support from "./pages/Support";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardSummary />} />
          <Route path="summary" element={<DashboardSummary />} />
          <Route path="analytics" element={<DashboardAnalytics />} />
        </Route>

        <Route 
          path="/logs" 
          element={
            <ProtectedRoute>
              <Logs /> 
            </ProtectedRoute>
          } 
        />
        <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
