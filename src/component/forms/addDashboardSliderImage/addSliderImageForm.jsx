import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import WithAddSliderImageFormik from "../../hoc/WithAddSliderImageFormik";
import { Stack, Box, Button } from "@mui/material";
import UiInputText from "../../uiKit/uiInput/uiInput";
import UiButton from "../../uiKit/uiButton/uiButton";
import sampleImage from "../../../images/avatar.png";

const AddSliderImageForm = ({
  formik,
  interfaceUI,
  setInterfaceUI,
  toggleShowModal,
  sideSlideImage,
  setSideSlideImage,
}) => {
  const [t] = useTranslation();

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
          <Button variant="contained" component="label" sx={{ padding: 2 }}>
            <input
              type="file"
              component={"label"}
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSideSlideImage(event.target.files[0]);
              }}
              hidden
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
          label={"افزودن"}
          variant={"contained"}
          sx={{ width: "50%" }}
        />
      </Stack>
    </form>
  );
};

export default WithAddSliderImageFormik(AddSliderImageForm);
