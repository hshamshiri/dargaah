import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../../redux/tokenReducer";
import { setLoginState } from "../../redux/loginConfigeReducer";
import { setAuth } from "../../redux/authenticateReducer";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.accessToken);
  const { isAuth } = useSelector((state) => state.authenticate);

  // call this function when you want to authenticate the user
  const login = async (token) => {
    localStorage.setItem("token", token);
    dispatch(setAccessToken(token));
    dispatch(setLoginState("report"));
    dispatch(setAuth(true));
  };

  // call this function to sign out logged in user
  const logout = () => {
    dispatch(setLoginState("logout"));
    dispatch(setAuth(false));
    localStorage.clear();
    navigate("/", { replace: true });
  };

  const checkAuth = async () => {
    await checkTokenValidation();
    console.log("ooooo", isAuth);
    if (!isAuth) {
      //logout();
      //or refreshToken()
      //or redirect("login")
    }
  };

  const checkTokenValidation = () => {
    //write validation
    dispatch(setAuth(true));
  };

  const value = useMemo(
    () => ({
      login,
      logout,
      checkAuth,
      isAuth,
    }),
    []
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
