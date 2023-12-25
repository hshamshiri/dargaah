import LoginFrame from "../../component/layout/loginFrame/loginFrame";
import TabComp from "../../component/uiKit/uiTab/uiTab";
import PasswordLoginView from "./loginViewsElement/passwordLoginView";
import QRLoginView from "./loginViewsElement/qrLoginView";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [t] = useTranslation()
  return (
    <div>
      <LoginFrame>
        <TabComp
          tabViews={[<PasswordLoginView />, <QRLoginView />]}
          tabLabels={[t("login.tab.qrTabTitle"), t("login.tab.passwordTabTitle")]}
        >
          <PasswordLoginView />
          <QRLoginView />
        </TabComp>
      </LoginFrame>
    </div>
  );
};

export default Login;
