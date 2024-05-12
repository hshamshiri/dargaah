import { useTheme } from "@emotion/react"
import { Typography, Grid } from "@mui/material"
import Carousel from "react-material-ui-carousel";
import Item from "./items";
import { v4 as uuidv4 } from "uuid";

const JournalSlider = ({
    interval = 6000,
    duration = 3000,
    animation = "slide",
    swipe = "true",
    sx,
    journals
}) => {

    const theme = useTheme()
    const styles = {
        journal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 60,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            color: "white",
            fontSize: 18,
            fontWeight: 500,
            background: theme.palette.gradient.main
        }
    }
    return (
        <Grid>
            <Typography sx={styles.journal}>
                {journals?.title}
            </Typography>
            <Carousel
                //autoPlay={false}
                stopAutoPlayOnHover
                interval={interval}
                duration={duration}
                animation={animation}
                swipe={swipe}
                changeOnFirstRender={true}
                sx={[{ boxShadow: 5 }, sx]}
                //indicator setting
                indicatorIconButtonProps={{
                    style: {
                        padding: "5px", // 1
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
                {journals?.images && journals?.images?.length > 0 && journals?.images.map((image, i) => <Item key={uuidv4()} item={image} />)}
            </Carousel>
        </Grid>
    );
};

export default JournalSlider;

