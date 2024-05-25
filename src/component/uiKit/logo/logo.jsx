import { useSelector } from "react-redux";
import UiZoom from "../../../component/uiKit/uiTransitions/uiZoom/uiZoom";
import seplogo from "./../../../images/sepaah.png";
import { Box } from "@mui/material";

export default function Logo() {
  const loginState = useSelector((state) => state.loginState.loginState);
  return (
    <UiZoom showIn={loginState === "logout"||"forget" ? true : false}>
      <Box width={60} margin={3} component={"img"} src={seplogo} />
    </UiZoom>
  );
}
