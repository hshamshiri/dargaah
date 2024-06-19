import "./App.css";
import { Routes, Route, Navigate, redirect, replace } from "react-router-dom";
import Dashboard from "./screens/dashboard/dashboard";
import Login from "./screens/login/login";
import DashboardAdmin from "./screens/dashboardAdmin/dashboardAdmin";
import NoMatchRoute from "./screens/noMatchRoute/noMatchRoute";
import { addCustomFuncToBuiltInFunc } from "./utils/helper/addCustomeFuncToBuiltInFunction";
import { AuthProvider, useAuth } from "./component/hooks/useAuth";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  addCustomFuncToBuiltInFunc();
  const { checkAuth } = useAuth();
  const { isAuth } = useSelector((state) => state.authenticate);

  return (
    <div className='App'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboardAdmin' element={<DashboardAdmin />} />
          <Route path='*' element={<NoMatchRoute />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
