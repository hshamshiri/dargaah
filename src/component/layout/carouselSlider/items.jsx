import { Paper } from "@mui/material";
import UiButton from "../../uiKit/uiButton/uiButton";

const Item = ({ item }) => {
  return (
    <Paper style={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <img className="w-80 h-96 object-contain" src={item.src} />
      <div className="flex w-full justify-center">
        <p className="w-96 text-white">{item.description}</p>
      </div>
      {item.app && (
        <UiButton
          type="submit"
          label={item.appButtonTitle}
          onclick={<a href="#" />}
          variant="contained"
          iconName={"download"}
          iconType={"button"}
          sx={{
            borderColor: "white",
            border: 1,
            backgroundColor: "transparent",
          }}
        />
      )}
    </Paper>
  );
};

export default Item;
