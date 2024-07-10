import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import UiIcon from "../uiIcon/uiIcon";

const OptionButton = () => {
  const removeSlider = (id) => {
    console.log("iiiiid:", id);
  };

  return (
    <Box display={"flex"} borderTop={1} borderColor={"lightgray"}>
      <Box onClick={() => removeSlider()}>
        <UiIcon iconName='delete' iconColor='red' iconHoverColor='red' />
      </Box>
      <Box onClick={() => console.log("addd")}>
        <UiIcon
          iconName={"addImage"}
          iconColor={"green"}
          iconHoverColor={"green"}
        />
      </Box>
    </Box>
  );
};

export default function ScrollableTabsButtonAuto({
  journals,
  setIndexSelected,
}) {
  const [value, setValue] = useState(0);
  const [showOption, setShowOption] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIndexSelected(newValue);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      boxShadow={5}
      sx={{
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons={"auto"}
      >
        {journals &&
          journals.length > 0 &&
          journals.map((journal, i) => (
            <Tab
              onMouseOver={() => setShowOption(true)}
              onMouseLeave={() => setShowOption(false)}
              key={i}
              label={journal.title}
              icon={<OptionButton />}
              iconPosition='bottom'
              sx={{
                margin: 0.0,
                borderRadius: 2,
                borderColor: "lightGray",
                //borderTop: 2,
                // borderLeft: 3,
                // margin: 0.2,
              }}
            />
          ))}
      </Tabs>
    </Box>
  );
}
