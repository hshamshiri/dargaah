
import LoginFrame from "../../component/layout/loginFrame/loginFrame";
import TabComp from "../../component/uiKit/uiTab/uiTab";
import PasswordLoginView from "./loginViewsElement/passwordLoginView";
import QRLoginView from "./loginViewsElement/qrLoginView";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [t] = useTranslation()
  return (
    <LoginFrame>
      {/* <Box sx={{ display: "flex", width: "100%", flexDirection: "column", padding: 1 }}> */}
      {/* <Typography variant="body1">{t("login.rightSection.enter")}</Typography> */}
      <TabComp
        tabViews={[<PasswordLoginView />, <QRLoginView />]}
        tabLabels={[t("login.tab.qrTabTitle"), t("login.tab.passwordTabTitle")]}
      >
        <PasswordLoginView />
        <QRLoginView />
      </TabComp>
      {/* </Box> */}
    </LoginFrame>

  );
};

export default Login;
