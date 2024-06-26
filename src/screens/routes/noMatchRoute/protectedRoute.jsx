import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../component/hooks/useAuth";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { checkAuth, isAuth } = useAuth();
  useEffect(() => {
    checkAuth();
  }, []);
  return isAuth ? children : <Navigate to='/login' />;
}
