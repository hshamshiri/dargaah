import { useTranslation } from "react-i18next";
import LoginFrame from "../../component/layout/loginFrame/loginFrame";
import LoginForm from "./loginform/loginForm";
import ForgetPaswordForm from "./forgetPassword/forgetPaswordForm";
import LoginReport from "./loginReport/loginReport";
import Terms from "./terms/terms";
import { useAuth } from "../../component/hooks/useAuth";

// import TabComp from "../../component/uiKit/uiTab/uiTab";
// import QRLoginView from "./loginform/qrLoginView";

const Login = () => {
  const [t] = useTranslation();
  const { loginState } = useAuth();
  console.log("loginnnn", loginState);
  return (
    <LoginFrame>
      {loginState === "logout" && <LoginForm />}
      {loginState === "forget" && <ForgetPaswordForm />}
      {loginState === "report" && <LoginReport />}
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
