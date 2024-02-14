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

  useEffect(() => {
    axios.get("http://192.168.20.101:7000/docs#/top_slider/update_user_api_slider_all_get", { headers: { 'Access-Control-Allow-Origin': '*' } }).then(res => console.log(res)).catch(function (err) {
      console.log("wwwwwwwwwwwwwwwwwwww", err.message)
      toast(err.message)
    })

  }, [])


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
