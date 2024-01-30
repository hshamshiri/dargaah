import { Box, ImageList, ImageListItem } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import UiIcon from "../../uiKit/uiIcon/uiIcon";

const EditSliderImagesForm = ({
  interfaceUI,
  setInterfaceUI,
  toggleShowModal,
  sliderName,
}) => {
  console.log(interfaceUI?.topSlider?.images);
  return (
    <Box>
      <ImageList sx={{ maxHeight: 500 }} cols={1}>
        {interfaceUI?.topSlider?.images.map((image, i) => {
          return (
            <Box
              margin={1}
              boxShadow={3}
              display={"flex"}
              minHeight={50}
              key={i}
              sx={{ borderEndEndRadius: 10, borderStartEndRadius: 10 }}
            >
              <ImageListItem
                sx={{
                  minHeight: 50,
                  borderEndEndRadius: 10,
                  borderStartEndRadius: 10,
                }}
              >
                <LazyLoadImage
                  style={{ minHeight: 50 }}
                  src={image.url}
                  loading="lazy"
                />
              </ImageListItem>
              <Box
                height={"100%"}
                minWidth={40}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ borderEndEndRadius: 10, borderStartEndRadius: 10 }}
                bgcolor={"orange"}
              >
                <UiIcon iconName="delete" iconColor={"white"} />
              </Box>
            </Box>
          );
        })}
      </ImageList>
    </Box>
  );
};

export default EditSliderImagesForm;
