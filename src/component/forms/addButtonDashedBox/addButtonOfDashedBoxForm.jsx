import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import withAddButtonOfDashedBoxFormik from "../../hoc/withAddButtonOfDashedBoxFormik";
import { Stack, Box, Button } from "@mui/material";
import UiInputText from "../../uiKit/uiInput/uiInput";
import UiButton from "../../uiKit/uiButton/uiButton";
import sampleImage from "../../../images/album.png";

const AddButtonOfDashedBox = ({ formik, interfaceUI, setInterfaceUI, id }) => {
  const [t] = useTranslation();
  const [topSlideImage, setTopSlideImage] = React.useState(null);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack
        spacing={3}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Button component="label" sx={{ padding: 0 }}>
            <UiInputText
              type="file"
              name="file"
              id="file"
              accept="image/jpeg,image/png,image/tiff,image/webp"
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
          id="btnName"
          name="btnName"
          label={t("dashboard.main.buttonName")}
          value={formik.values.btnName}
          onChange={formik.handleChange}
          error={formik.touched.btnName && Boolean(formik.errors.btnName)}
          helperText={formik.touched.btnName && formik.errors.btnName}
        />
        <UiInputText
          formik={formik}
          //onChange={(e) => setBoxName(e?.target?.value)}
          id="btnLink"
          name="btnLink"
          label={t("dashboard.main.link")}
          value={formik.values.btnLink}
          onChange={formik.handleChange}
          error={formik.touched.btnLink && Boolean(formik.errors.btnLink)}
          helperText={formik.touched.btnLink && formik.errors.btnLink}
        />

        <UiButton
          type="submit"
          label={t("dashboard.main.add")}
          variant={"contained"}
          sx={{ width: "50%" }}
        />
      </Stack>
    </form>
  );
};

export default withAddButtonOfDashedBoxFormik(AddButtonOfDashedBox);
