import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import moment from "jalali-moment";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [loginState, setLoginState] = useState(
    localStorage.getItem("loginStatus")
      ? localStorage.getItem("loginStatus")
      : "logout"
  );

  const login = async (token) => {
    await localStorage.setItem("jwt", token);
    await localStorage.setItem("isAuth", true);
    await localStorage.setItem("loginStatus", "report");
    setLoginState("report");
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.clear();
    setLoginState("logout");
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
    if (tokenExpired(jwt)) return false;
    return true;
  };

  const tokenExpired = (jwt) => {
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
