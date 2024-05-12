import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import WithAddTopSliderImageFormik from "../../hoc/WithAddTopSliderImageFormik";
import { Stack, Box, Button } from "@mui/material";
import UiInputText from "../../uiKit/uiInput/uiInput";
import UiButton from "../../uiKit/uiButton/uiButton";
import sampleImage from "../../../images/album.png";

const AddTopSliderImageForm = ({
  formik,
  toggleShowModal,
}) => {
  const [t] = useTranslation();
  const [topSlideImage, setTopSlideImage] = useState();

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack
        spacing={3}
        display={"flex"}
        flexWrap={"wrap"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Button component="label" sx={{ padding: 0 }}>
            {/* <input
              type="file"
              name="file"
              id="file"
              component={"label"}
              onChange={(event) => {
                formik.handleChange(event);
                setTopSlideImage(event.target.files[0]);
              }}
              hidden={true}
            /> */}
            <UiInputText
              type="file"
              name="file"
              id="file"
              accept="image/jpeg,image/gif,image/png,image/tiff,image/webp"
              onChange={(event) => {
                formik.setFieldValue("file", event.target.files[0]);
                setTopSlideImage(event?.target?.files[0]);
              }}
              error={formik.touched.file && Boolean(formik.errors.file)}
              helperText={formik.touched.file && formik.errors.file}
              sx={{ display: "none" }}
            />
            <Box>
              <img
                alt="sliderImage"
                className="w-40"
                src={
                  topSlideImage
                    ? URL.createObjectURL(topSlideImage)
                    : sampleImage
                }
              />
            </Box>
          </Button>
        </Box>
        <UiInputText
          formik={formik}
          //onChange={(e) => setBoxName(e?.target?.value)}
          sx={{ alignSelf: "center" }}
          id="imageLink"
          name="imageLink"
          label={t("dashboard.main.link")}
          value={formik.values.imageLink}
          onChange={formik.handleChange}
          error={formik.touched.imageLink && Boolean(formik.errors.imageLink)}
          helperText={formik.touched.imageLink && formik.errors.imageLink}
        />
        <UiButton
          type="submit"
          label={t("dashboard.main.add")}
          variant={"contained"}
          sx={{ width: 200 }}
        />
      </Stack>
    </form>
  );
};

export default WithAddTopSliderImageFormik(AddTopSliderImageForm);
