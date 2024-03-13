import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
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




  useEffect(() => {
    const checkImageListLength = () => {
      if (imageList.length === 0) {
        toast("تصویری برای نمایش وجود ندارد")
        toggleShowModal(false)
      }
    }
    checkImageListLength()

  }, [imageList])




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




  return (
    <Box>
      {/* container */}

      <ImageList
        sx={{
          direction: "rtl",
          height: 500
        }}
        cols={isTopSlider ? 1 : 2}
        rowHeight={isTopSlider ? 200 : 300}
      >
        {imageList && imageList.length > 0 &&
          imageList.map((image, i) => {
            return (
              <Box key={i}>
                <ImageListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 2,
                    margin: 1,
                    boxShadow: 3,
                    borderRadius: 2,
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


                </ImageListItem>

                <Box sx={{ display: "flex", margin: 1, marginBottom: 2 }}>

                  <UiButton
                    onclick={() => removeImage(image?.id)}
                    //label={t("dashboard.main.addBtn")}
                    variant={"contained"}
                    iconName={"delete"}
                    iconType={"button"}
                    iconColor={"red"}
                    tooltipTitle={t("dashboard.main.deleteBox")}
                    sx={{
                      width: 20,
                      minWidth: 40,
                      margin: 0.1,
                    }}
                  />


                  <UiButton
                    onclick={() => toast("به زودی فعال می شود")}
                    variant={"contained"}
                    iconName={"editIcon"}
                    iconType={"button"}
                    tooltipTitle={t("dashboard.main.updateBoxName")}
                    sx={{
                      width: 20,
                      minWidth: 40,
                      margin: 0.1,
                    }}
                  />
                </Box>
              </Box >


            );
          })}
      </ImageList >
    </Box >
  );
};

export default EditSliderImagesForm;
