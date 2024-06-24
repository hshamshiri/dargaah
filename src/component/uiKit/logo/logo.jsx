import UiZoom from "../../../component/uiKit/uiTransitions/uiZoom/uiZoom";
import seplogo from "./../../../images/sepaah.png";
import { Box } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";

export default function Logo() {
  const { loginState } = useAuth();
  return (
    <UiZoom showIn={loginState === "logout" || "forget" ? true : false}>
      <Box width={60} margin={3} component={"img"} src={seplogo} />
    </UiZoom>
  );
}
