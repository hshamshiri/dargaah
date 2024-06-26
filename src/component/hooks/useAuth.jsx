import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import moment from "jalali-moment";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [loginState, setLoginState] = useState("logout");

  const login = async (token) => {
    await localStorage.setItem("jwt", token);
    await localStorage.setItem("isAuth", true);
    setIsAuth(true);
    setLoginState("report");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const checkAuth = async () => {
    checkTokenValid().then(async (isTokenValid) => {
      await setIsAuth(isTokenValid);
      await localStorage.setItem("isAuth", isTokenValid);
    });
  };

  const checkTokenValid = async () => {
    const jwt = await localStorage.getItem("jwt");
    if (!jwt) return false;
    if (tokenExpire(jwt)) return false;
    return true;
  };

  const tokenExpire = (jwt) => {
    const jwt_decode = jwtDecode(jwt);
    if (jwt_decode.exp > moment().unix()) return false;
    return true;
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, checkAuth, login, logout, setLoginState, loginState }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
