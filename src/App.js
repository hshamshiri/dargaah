import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./screens/dashboard/dashboard";
import Login from "./screens/login/login";
import DashboardAdmin from "./screens/dashboardAdmin/dashboardAdmin";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

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
