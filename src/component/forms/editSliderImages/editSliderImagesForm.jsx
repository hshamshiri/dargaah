import { Box, Divider, ImageList, ImageListItem } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import UiIcon from "../../uiKit/uiIcon/uiIcon";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const EditSliderImagesForm = ({
  interfaceUI,
  setInterfaceUI,
  toggleShowModal,
  sliderName,
}) => {
  const isTopSlider = sliderName === "topSlider" ? true : false;

  let imageList = [];
  imageList = isTopSlider
    ? interfaceUI?.topSlider?.images
    : interfaceUI?.journals?.images;

  const removeImage = () => {};

  console.log(imageList);
  return (
    <Box>
      <ImageList sx={{ maxHeight: 500 }} cols={isTopSlider ? 1 : 2}>
        {imageList &&
          imageList.map((image, i) => {
            return (
              <Box
                margin={1}
                boxShadow={3}
                display={"flex"}
                flexDirection={isTopSlider ? "row" : "column"}
                minHeight={50}
                key={i}
                sx={[
                  isTopSlider && {
                    borderEndEndRadius: 10,
                    borderStartEndRadius: 10,
                  },
                  { borderRadius: 2 },
                ]}
              >
                <ImageListItem
                  sx={{
                    borderEndEndRadius: 5,
                    borderStartEndRadius: 5,
                    minHeight: 40,
                  }}
                >
                  <LazyLoadImage
                    style={{ minHeight: 50 }}
                    src={image.url}
                    loading="lazy"
                  />
                </ImageListItem>

                <Box
                  height={isTopSlider ? "100%" : "20%"}
                  minWidth={40}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={isTopSlider && "red"}
                  sx={[
                    isTopSlider && {
                      borderEndEndRadius: 5,
                      borderStartEndRadius: 5,
                    },
                  ]}
                >
                  <Tooltip title={"حذف"} placement="bottom">
                    <Box>
                      <UiIcon
                        iconName="delete"
                        iconColor={"white"}
                        classes={{ backgroundColor: "red" }}
                      />
                    </Box>
                  </Tooltip>
                </Box>
              </Box>
            );
          })}
      </ImageList>
    </Box>
  );
};

export default EditSliderImagesForm;
