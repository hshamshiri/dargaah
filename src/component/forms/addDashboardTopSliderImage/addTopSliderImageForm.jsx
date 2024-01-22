import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import WithAddTopSliderImageFormik from "../../hoc/WithAddTopSliderImageFormik";
import { Stack, Box, Button } from "@mui/material";
import UiInputText from "../../uiKit/uiInput/uiInput";
import UiButton from "../../uiKit/uiButton/uiButton";
import sampleImage from "../../../images/album.png";

const AddTopSliderImageForm = ({
  formik,
  interfaceUI,
  setInterfaceUI,
  toggleShowModal,
}) => {
  const [t] = useTranslation();
  const [sideSlideImage, setSideSlideImage] = useState();

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
                //console.log(event.target.files[0]);
                setSideSlideImage(event.target.files[0]);
              }}
              hidden={true}
            /> */}
            <UiInputText
              type="file"
              name="file"
              id="file"
              accept="image/jpeg,image/png,image/tiff,image/webp"
              onChange={(event) => {
                formik.setFieldValue("file", event.target.files[0]);
                setSideSlideImage(event?.target?.files[0]);
              }}
              hidden={true}
              error={formik.touched.file && Boolean(formik.errors.file)}
              helperText={formik.touched.file && formik.errors.file}
              sx={{ display: "none" }}
            />
            <Box>
              <img
                className="w-40"
                src={
                  sideSlideImage
                    ? URL.createObjectURL(sideSlideImage)
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
          sx={{
            width: "50%",
            background: (theme) => theme.palette.gradient.main,
          }}
        />
      </Stack>
    </form>
  );
};

export default WithAddTopSliderImageFormik(AddTopSliderImageForm);
