import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Divider, ImageList, ImageListItem, Zoom } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Tooltip from "@mui/material/Tooltip";
import UiButton from "../../uiKit/uiButton/uiButton";
//
import { deleteRequest } from "../../../utils/network/requsets/deleteRequest";
import { APIs } from "../../../utils/network/apiClient";
import { addTopSliderImage, addJournalImage } from "../../../redux/uiConfigeReducer";
import { toast } from "react-toastify"
import { useTranslation } from "react-i18next";




const EditSliderImagesForm = ({
  toggleShowModal,
  sliderName,
}) => {
  const isTopSlider = sliderName === "topSlider" ? true : false;
  const topImages = useSelector((state) => state?.uiConfigeJson?.topSlider_list)
  const journals = useSelector((state) => state?.uiConfigeJson?.journal_list.images)
  const dispatch = useDispatch()
  const [t] = useTranslation()

  let imageList = [];
  imageList = isTopSlider ? topImages : journals

  const removeImage = (id) => {

    if (isTopSlider) {
      deleteRequest(APIs.topSlider.delete_Image + id).then((response) => {
        response.data && dispatch(addTopSliderImage(response.data))
        response.error.msg && toast.error(response.error.msg + "\n" + response.error.status)
      })

    } else {
      deleteRequest(APIs.journal.delete_Image + id).then((response) => {
        response.data && dispatch(addJournalImage(response.data))
        response.error.msg && toast.error(response.error.msg + "\n" + response.error.status)

      })
    }

  };

  useEffect(() => {
    if (isTopSlider) {
      if (topImages.length === 0) {
        emptyImageList()
      }
    } else {
      if (journals.length === 0) {
        emptyImageList()
      }
    }
  }, [topImages, journals])

  const emptyImageList = () => {
    toast("تصویری برای نمایش وجود ندارد")
    toggleShowModal(false)
  }


  return (
    <Box>
      {/* container */}
      <ImageList
        sx={{
          direction: "rtl",
          height: 500
        }}
        cols={isTopSlider ? 2 : 3}
        rowHeight={isTopSlider ? 200 : 300}
      >
        {imageList && imageList.length > 0 &&
          imageList.map((image, i) => {
            return (
              <ImageListItem
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 2,
                  margin: 1,
                  boxShadow: 3,
                  borderRadius: 2
                }}
              >

                <LazyLoadImage
                  style={{
                    height: "100%",
                    width: "100%",
                    margin: 1,
                  }}

                  src={image.image_url}
                  loading="lazy"
                />

                <Box sx={{ display: "flex", marginTop: 2 }}>
                  <Tooltip
                    title={t("dashboard.main.deleteBox")}
                    placement="top"
                    arrow
                    TransitionComponent={Zoom}
                  >
                    <Box>
                      <UiButton
                        onClick={() => removeImage(image?.id)}
                        //label={t("dashboard.main.addBtn")}
                        variant={"contained"}
                        iconName={"delete"}
                        iconType={"button"}
                        iconColor={"red"}
                        sx={{
                          width: 20,
                          minWidth: 40,
                          margin: 0.1,
                          background: (theme) => theme.palette.gradient.main,
                        }}
                      />
                    </Box>
                  </Tooltip>


                  <Tooltip title={t("dashboard.main.updateBoxName")} placement="top" arrow>
                    <Box>
                      <UiButton
                        onclick={() => toast("به زودی فعال می شود")}
                        //label={t("dashboard.main.edit")}
                        variant={"contained"}
                        iconName={"editIcon"}
                        iconType={"button"}
                        sx={{
                          width: 20,
                          minWidth: 40,
                          margin: 0.1,
                          background: (theme) => theme.palette.gradient.main,
                        }}
                      />
                    </Box>
                  </Tooltip>
                </Box>
              </ImageListItem>



            );
          })}
      </ImageList>
    </Box>
  );
};

export default EditSliderImagesForm;
