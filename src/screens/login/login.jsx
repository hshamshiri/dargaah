
import LoginFrame from "../../component/layout/loginFrame/loginFrame";
import LoginForm from "./loginViewsElement/loginForm";
import ForgetPaswordForm from "./forgetPassword/forgetPaswordForm";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import TabComp from "../../component/uiKit/uiTab/uiTab";
import QRLoginView from "./loginViewsElement/qrLoginView";
import { changeLoginState } from "../../redux/loginConfigeReducer";

const Login = () => {
  const [t] = useTranslation()
  const dispatch = useDispatch()
  const loginState = useSelector((state) => state.loginState.loginState)

  return (
    <LoginFrame>
      {loginState === "logout" && <LoginForm />}
      {loginState === "forget" && <ForgetPaswordForm />}
    </LoginFrame>
  );
};
//  <TabComp
//   tabViews={[<PasswordLoginView />, <QRLoginView />]}
//   tabLabels={[t("login.tab.qrTabTitle"), t("login.tab.passwordTabTitle")]}
// >
//   <PasswordLoginView />
//   <QRLoginView />
// </TabComp> 



export default Login;
