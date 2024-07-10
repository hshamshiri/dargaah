import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Typography, Grid, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Item from "./items";
import { v4 as uuidv4 } from "uuid";
import ScrollableTabsButtonAuto from "../../uiTab/uiGroupTab";

const JournalSlider = ({
  interval = 6000,
  duration = 3000,
  animation = "slide",
  swipe = "true",
  sx,
  journals,
}) => {
  const [indexSelected, setIndexSelected] = useState(0);

  return (
    <Grid>
      {/* <Typography sx={styles.journal}>{journals?.title}</Typography> */}
      <ScrollableTabsButtonAuto
        journals={journals}
        setIndexSelected={setIndexSelected}
      />
      <Carousel
        //autoPlay={false}
        stopAutoPlayOnHover
        interval={interval}
        duration={duration}
        animation={animation}
        swipe={swipe}
        changeOnFirstRender={true}
        sx={[{ boxShadow: 5, width: "100%" }, sx]}
        //indicator setting
        indicatorIconButtonProps={{
          style: {
            padding: "5px", // 1
            marginTop: 10,
            color: "drawer.main", // 3
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            //backgroundColor: "red", // 2
          },
        }}
        indicatorContainerProps={
          {
            // style: {
            //   marginTop: "50px", // 5
            //   textAlign: "right", // 4
            // },
          }
        }
      >
        {journals &&
          journals[indexSelected]?.images &&
          journals[indexSelected]?.images.map((image, i) => (
            <Item key={uuidv4()} item={image} />
          ))}
      </Carousel>
    </Grid>
  );
};

export default JournalSlider;
