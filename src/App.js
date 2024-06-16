import "./App.css";
import { Routes, Route, Redirect } from "react-router-dom";
import Dashboard from "./screens/dashboard/dashboard";
import Login from "./screens/login/login";
import DashboardAdmin from "./screens/dashboardAdmin/dashboardAdmin";
import NoMatchRoute from "./screens/noMatchRoute/noMatchRoute";
import { addCustomFuncToBuiltInFunc } from "./utils/helper/addCustomeFuncToBuiltInFunction";
import { AuthProvider } from "./component/hooks/useAuth";
import { useSelector } from "react-redux";

function App() {
  addCustomFuncToBuiltInFunc();
  const { isAuth } = useSelector((state) => state.authenticate);

  return (
    <div className='App'>
      <AuthProvider>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboardAdmin' element={<DashboardAdmin />} />
          <Route path='/' element={<Login />} />
          <Route path='*' element={<NoMatchRoute />} />
          {/* <Route
            //{...rest}
            render={(props) =>
              isAuth ? <Component {...props} /> : <Redirect to='/' />
            }
          /> */}
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
