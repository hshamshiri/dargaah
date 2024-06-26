import React from "react";
import { useTranslation } from "react-i18next";
import withAddButtonOfDashedBoxFormik from "../../hoc/withAddButtonOfDashedBoxFormik";
import { Stack, Button, FormHelperText } from "@mui/material";
import UiInputText from "../../uiKit/uiInput/uiInput";
import UiButton from "../../uiKit/uiButton/uiButton";
import sampleImage from "../../../images/album.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@emotion/react";

const AddButtonOfDashedBox = ({ formik, boxInfo, buttonInfo }) => {
  const [t] = useTranslation();
  const [buttonImage, setButtonImage] = React.useState(null);
  const theme = useTheme();

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack
        spacing={3}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          sx={{ display: "flex", flexDirection: "column" }}
          component='label'
        >
          <LazyLoadImage
            className='w-40'
            src={
              buttonImage
                ? URL.createObjectURL(buttonImage)
                : buttonInfo?.image_url
                ? buttonInfo.image_url
                : sampleImage
            }
          />
          <UiInputText
            type='file'
            name='file'
            id='file'
            accept='image/jpeg,image/png,image/tiff,image/webp'
            onChange={(event) => {
              formik.setFieldValue("file", event.target.files[0]);
              setButtonImage(event?.target?.files[0]);
            }}
            error={formik.touched.file && Boolean(formik.errors.file)}
            helperText={formik.touched.file && formik.errors.file}
            sx={{ display: "none" }}
          />
          <FormHelperText
            error={formik.touched.file && Boolean(formik.errors.file)}
          >
            {formik.touched.file && formik.errors.file}
          </FormHelperText>
        </Button>

        <UiInputText
          formik={formik}
          //onChange={(e) => setBoxName(e?.target?.value)}
          id='btnName'
          name='btnName'
          label={t("dashboard.main.buttonName")}
          value={
            buttonInfo && formik.values.btnName === null
              ? buttonInfo.label
              : formik.values.btnName
          }
          placeHolder={buttonInfo && buttonInfo.label}
          onChange={formik.handleChange}
          error={formik.touched.btnName && Boolean(formik.errors.btnName)}
          helperText={formik.touched.btnName && formik.errors.btnName}
        />
        <UiInputText
          formik={formik}
          //onChange={(e) => setBoxName(e?.target?.value)}
          id='btnLink'
          name='btnLink'
          label={t("dashboard.main.link")}
          value={
            buttonInfo && formik.values.btnLink === null
              ? buttonInfo.link
              : formik.values.btnLink
          }
          placeHolder={buttonInfo && buttonInfo.link}
          onChange={formik.handleChange}
          error={formik.touched.btnLink && Boolean(formik.errors.btnLink)}
          helperText={formik.touched.btnLink && formik.errors.btnLink}
        />

        <UiButton
          type='submit'
          label={t("dashboard.main.add")}
          variant={"contained"}
          backgroundColor={theme.palette.base.mid}
          hoverColor={theme.palette.base.light}
          sx={{ width: 200 }}
        />
      </Stack>
    </form>
  );
};

export default withAddButtonOfDashedBoxFormik(AddButtonOfDashedBox);
