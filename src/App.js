import { useRef } from "react";
import "./App.css";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  redirect,
  replace,
  useNavigation,
} from "react-router-dom";
import Dashboard from "./screens/dashboard/dashboard";
import Login from "./screens/login/login";
import DashboardAdmin from "./screens/dashboardAdmin/dashboardAdmin";
import NoMatchRoute from "./screens/routes/noMatchRoute/noMatchRoute";
import { addCustomFuncToBuiltInFunc } from "./utils/helper/addCustomeFuncToBuiltInFunction";
import AuthProvider from "./component/hooks/useAuth";
import { useSelector } from "react-redux";
import useBackEvent from "./component/hooks/useBackEvent ";
import AlertDialog from "./component/uiKit/uiDialog/uiDialog";
import ProtectedRoute from "./screens/routes/noMatchRoute/protectedRoute";

function App() {
  addCustomFuncToBuiltInFunc();
  const { isAuth } = useSelector((state) => state.authenticate);
  const location = useLocation();
  const navigate = useNavigate();
  const dialogRef = useRef();

  useBackEvent(() => {
    console.log("location.pathname:", location.pathname);
    navigate("/dashboard", { replace: true });
    // if (location.pathname === "/dashboard") {
    //   dialogRef.current();
    // }
  });

  return (
    <div className='App'>
      <AuthProvider>
        <AlertDialog
          myRef={dialogRef}
          message={"آیا میخواهید خارج شوید"}
          action={() => navigate("dashboardAdmin")}
        />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            exact
            path='/'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path='/dashboardAdmin' element={<DashboardAdmin />} />
          <Route path='*' element={<NoMatchRoute />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
