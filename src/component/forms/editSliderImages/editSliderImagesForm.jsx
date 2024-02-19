import { useSelector, useDispatch } from "react-redux";
import { Box, Divider, ImageList, ImageListItem } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import UiIcon from "../../uiKit/uiIcon/uiIcon";
import Tooltip from "@mui/material/Tooltip";
//
import { deleteRequest } from "../../../utils/network/requsets/deleteRequest";
import { APIs } from "../../../utils/network/apiClient";
import { addTopSliderImage, addJournalsImage } from "../../../redux/uiConfigeReducer";
import { toast } from "react-toastify"

const EditSliderImagesForm = ({

  toggleShowModal,
  sliderName,
}) => {
  const isTopSlider = sliderName === "topSlider" ? true : false;
  const topImages = useSelector((state) => state?.uiConfigeJson?.topSlider?.images)
  const journals = useSelector((state) => state?.uiConfigeJson?.journals?.images)
  const dispatch = useDispatch()

  let imageList = [];
  imageList = isTopSlider ? topImages : journals

  const removeImage = (id) => {

    if (isTopSlider) {
      deleteRequest(APIs.topSlider.deleteImage, id).then((response) => {
        response.data && dispatch(addTopSliderImage(response.data))
        response.error.msg && toast.error(response.error.msg + "\n" + response.error.status)

      })
    } else {
      deleteRequest(APIs.journal.deleteImage, id).then((response) => {
        response.data && dispatch(addJournalsImage(response.data))
        response.error.msg && toast.error(response.error.msg + "\n" + response.error.status)

      })
    }

  };

  return (
    <Box>
      <ImageList
        sx={{
          direction: "rtl",
          maxHeight: 500,
          minHeight: isTopSlider ? 50 : 300
        }}
        cols={isTopSlider ? 1 : 2}
      >
        {imageList &&
          imageList.map((image, i) => {

            return (
              <Box
                margin={1}
                boxShadow={3}
                display={"flex"}
                flexDirection={isTopSlider ? "row" : "column"}
                justifyContent={"space-between"}
                key={i}
                sx={[
                  isTopSlider && {
                    borderEndEndRadius: 10,
                    borderStartEndRadius: 10,
                  },
                  { borderRadius: 2 },
                ]}
              >
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


                  onClick={() => removeImage(image?.id)}
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
                <ImageListItem
                  sx={{
                    borderEndEndRadius: 5,
                    borderStartEndRadius: 5,
                    minHeight: 40,
                  }}
                >
                  <LazyLoadImage
                    style={{
                      minHeight: 50,
                      borderRadius: 10,
                      margin: 5,
                    }}
                    src={image.image_url}
                    loading="lazy"
                  />
                </ImageListItem>


              </Box>
            );
          })}
      </ImageList>
    </Box>
  );
};

export default EditSliderImagesForm;
