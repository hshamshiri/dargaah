import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DeleteButton from "../../uiKit/uiButton/deleteButton";

import { deleteRequest } from "../../../utils/network/requsets/deleteRequest";
import { APIs } from "../../../utils/network/apiClient";
import { addTopSliderImage } from "../../../redux/uiConfigeReducer";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const EditSliderImagesForm = ({ toggleShowModal, sliderName }) => {
  const topImages = useSelector(
    (state) => state?.uiConfigeJson?.topSlider_list
  );

  const dispatch = useDispatch();
  const [t] = useTranslation();
  let images = topImages;

  useEffect(() => {
    const checkImagesIsEmpty = () => {
      if (!images || images.length === 0) {
        toast("تصویری برای نمایش وجود ندارد");
        toggleShowModal(false);
      }
    };
    checkImagesIsEmpty();
  }, [images]);

  const removeImage = (id) => {
    let url = APIs.topSlider.delete_Image;

    deleteRequest(url + id).then((response) => {
      if (response.data) {
        dispatch(addTopSliderImage(response.data));
      }
      response.error.msg &&
        toast.error(response.error.msg + "\n" + response.error.status);
    });
  };

  return (
    <Box>
      {/* container */}

      {images && images.length > 0 && (
        <ImageList sx={styles.imageListStyle} cols={1} rowHeight={200}>
          {images.map((image, i) => {
            return (
              <Box key={i}>
                <ImageListItem sx={styles.imageListItem}>
                  <LazyLoadImage
                    style={styles.lazyLoadImage}
                    src={image.image_url}
                    loading='lazy'
                  />
                </ImageListItem>
                <Box sx={styles.optionButtonBox}>
                  <DeleteButton
                    // hover={false}
                    toolTipPlacement={"bottom"}
                    onClick={() => removeImage(image?.id)}
                  />
                  {/* <EditButton
                    // hover={false}
                    toolTipPlacement={"bottom"}
                    onclick={() => removeImage(image?.id)}
                  /> */}
                </Box>
              </Box>
            );
          })}
        </ImageList>
      )}
    </Box>
  );
};

const styles = {
  imageListStyle: {
    direction: "rtl",
    height: 500,
  },
  imageListItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: 2,
    margin: 1,
    boxShadow: 3,
    borderRadius: 2,
  },
  lazyLoadImage: {
    height: "100%",
    width: "100%",
    margin: 1,
    ImageList,
  },
  optionButtonBox: {
    display: "flex",
    justifyContent: "center",
    margin: 1,
    marginBottom: 1,
    width: "100%",
  },
};

export default EditSliderImagesForm;
