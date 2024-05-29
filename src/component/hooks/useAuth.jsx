import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import writeData from "../../utils/localStoarageMangement/writeData";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../../redux/tokenReducer";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.accessToken.accessToken);

  // call this function when you want to authenticate the user
  const login = async (token) => {
    writeData(token);
    dispatch(setAccessToken(token));
    navigate("/");
  };

  // call this function to sign out logged in user
  const logout = () => {
    writeData(null);
    //navigate("/login", { replace: true });
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
