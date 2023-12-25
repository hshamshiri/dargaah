import LoginFrame from "../../component/layout/loginFrame/loginFrame";
import TabComp from "../../component/uiKit/uiTab/uiTab";
import PasswordLoginView from "./loginViewsElement/passwordLoginView";
import QRLoginView from "./loginViewsElement/qrLoginView";

const Login = () => {
  return (
    <div>
      <LoginFrame>
        <TabComp
          tabViews={[<PasswordLoginView />, <QRLoginView />]}
          tabLabels={["ورود با رمز یک بار مصرف", "ورود با کد QR"]}
        >
          <PasswordLoginView />
          <QRLoginView />
        </TabComp>
      </LoginFrame>
    </div>
  );
};

export default Login;
