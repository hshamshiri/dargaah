import { Paper } from "@mui/material";
import UiButtonRound from "../../uiKit/uiButton/uiButton";

const Item = ({ item }) => {
  return (
    <Paper style={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <img className="w-80 h-96 object-contain" src={item.src} />
      <div className="flex w-full justify-center">
        <p className="w-96 text-white">{item.description}</p>
      </div>
      {item.app && <UiButtonRound title={item.appButtonTitle} />}
    </Paper>
  );
};

export default Item;
