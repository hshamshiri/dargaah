import { Paper, Button } from "@mui/material";

const Item = (props) => {
  return (
    <Paper style={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <img className="w-60 h-80 object-contain" src={props.item.src} />
      <p className="text-white">{props.item.description}</p>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
};

export default Item;
