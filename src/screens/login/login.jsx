
import LoginFrame from "../../component/layout/loginFrame/loginFrame";
import PasswordLoginView from "./loginViewsElement/loginView";
import { useTranslation } from "react-i18next";
import TabComp from "../../component/uiKit/uiTab/uiTab";
import QRLoginView from "./loginViewsElement/qrLoginView";

const Login = () => {
  const [t] = useTranslation()
  return (
    <LoginFrame>
      {/* <TabComp
        tabViews={[<PasswordLoginView />, <QRLoginView />]}
        tabLabels={[t("login.tab.qrTabTitle"), t("login.tab.passwordTabTitle")]}
      >
        <PasswordLoginView />
        <QRLoginView />
      </TabComp> */}
      <PasswordLoginView />
    </LoginFrame>
  );
};

export default Login;
