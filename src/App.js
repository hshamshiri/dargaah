import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/dashboard/dashboard";
import Login from "./screens/login/login";
import DashboardAdmin from "./screens/dashboardAdmin/dashboardAdmin";
import NoMatchRoute from "./screens/noMatchRoute/noMatchRoute";
import { addCustomFuncToBuiltInFunc } from "./utils/helper/addCustomeFuncToBuiltInFunction";
import { AuthProvider } from "./component/hooks/useAuth";

function App() {
  addCustomFuncToBuiltInFunc();
  return (
    <div className='App'>
      <AuthProvider>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboardAdmin' element={<DashboardAdmin />} />
          <Route path='/' element={<Login />} />
          <Route path='*' element={<NoMatchRoute />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
