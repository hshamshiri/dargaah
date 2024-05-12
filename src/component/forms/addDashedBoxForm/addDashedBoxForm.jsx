import React from "react";
import { useTranslation } from "react-i18next";
import WithAddDashedBoxFormik from "../../hoc/withAddDashedBoxFormik";
import { Stack } from "@mui/material";
import UiInputText from "../../uiKit/uiInput/uiInput";
import UiButton from "../../uiKit/uiButton/uiButton";

const AddDashedBoxForm = ({
  formik,
  toggleShowModal,
  box,
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
        <UiInputText
          formik={formik}
          //onChange={(e) => setBoxName(e?.target?.value)}
          sx={{ alignSelf: "center" }}
          id="boxName"
          name="boxName"
          label={t("dashboard.main.boxName")}
          value={formik.values.boxName}
          placeHolder={box && box.label}
          onChange={formik.handleChange}
          error={formik.touched.boxName && Boolean(formik.errors.boxName)}
          helperText={formik.touched.boxName && formik.errors.boxName}
        />
        <UiButton
          type="submit"
          label={box ? "ویرایش" : "افزودن"}
          variant={"contained"}
          sx={{ width: 200 }}
        />
      </Stack>
    </form>
  );
};

export default WithAddDashedBoxFormik(AddDashedBoxForm);
