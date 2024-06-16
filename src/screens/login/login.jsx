import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import LoginFrame from "../../component/layout/loginFrame/loginFrame";
import LoginForm from "./loginform/loginForm";
import ForgetPaswordForm from "./forgetPassword/forgetPaswordForm";
import UserReport from "./userReport/userReport";
import Terms from "./terms/terms";

// import TabComp from "../../component/uiKit/uiTab/uiTab";
// import QRLoginView from "./loginform/qrLoginView";

const Login = () => {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginState.loginState);

  console.log(loginState);
  return (
    <LoginFrame>
      {loginState === "logout" && <LoginForm />}
      {loginState === "forget" && <ForgetPaswordForm />}
      {loginState === "report" && <UserReport />}
      {loginState === "term" && <Terms />}
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
