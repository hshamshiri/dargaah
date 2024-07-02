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
import useBackEvent from "./component/hooks/useBackEvent ";
import AlertDialog from "./component/uiKit/uiDialog/uiDialog";
import ProtectedRoute from "./screens/routes/noMatchRoute/protectedRoute";
import { useAuth } from "./component/hooks/useAuth";

function App() {
  addCustomFuncToBuiltInFunc();
  const location = useLocation();
  const navigate = useNavigate();
  const dialogRef = useRef();
  const { logout, loginState } = useAuth();

  useBackEvent(() => {
    console.log("location.pathname:", location.pathname);

    // if (
    //   location.pathname === "/" ||
    //   (location.pathname === "/login" && loginState === "report")
    // ) {
    //   dialogRef.current();
    // }
  });

  return (
    <div className='App'>
      <AlertDialog
        myRef={dialogRef}
        message={"آیا میخواهید خارج شوید"}
        action={() => logout()}
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
    </div>
  );
}

export default App;
