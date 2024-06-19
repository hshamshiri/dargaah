import { redirect, Navigate } from "react-router-dom";
import { useAuth } from "../../component/hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();
  console.log("proooooteect:", isAuth);
  if (!isAuth) {
    return <Navigate to='/login' />;
  }
  return children;
}
