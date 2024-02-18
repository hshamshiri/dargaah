import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/dashboard/dashboard";
import Login from "./screens/login/login";
import DashboardAdmin from "./screens/dashboardAdmin/dashboardAdmin";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
