import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { setToLocalStorage } from "./handleLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (token) => {
    setToLocalStorage(token);
    navigate("/");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setToLocalStorage(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      login,
      logout,
    }),
    []
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
