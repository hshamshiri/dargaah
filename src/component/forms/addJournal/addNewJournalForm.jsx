import React from "react";
import { useTranslation } from "react-i18next";
import WithAddNewJournalFormik from "../../hoc/WithAddNewJournalFormik";
import { Stack } from "@mui/material";
import UiInputText from "../../uiKit/uiInput/uiInput";
import UiButton from "../../uiKit/uiButton/uiButton";
import { useTheme } from "@emotion/react";

const AddNewJournalForm = ({ formik, toggleShowModal }) => {
  const [t] = useTranslation();
  const theme = useTheme();

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
          sx={{ alignSelf: "center" }}
          id='journalName'
          name='journalName'
          label={t("journalName")}
          value={formik.values.journalName}
          //placeHolder={}
          onChange={formik.handleChange}
          error={
            formik.touched.journalName && Boolean(formik.errors.journalName)
          }
          helperText={formik.touched.journalName && formik.errors.journalName}
        />
        <UiButton
          type='submit'
          label={"افزودن"}
          variant={"contained"}
          backgroundColor={theme.palette.base.mid}
          hoverColor={theme.palette.base.light}
          sx={{ width: 200 }}
        />
      </Stack>
    </form>
  );
};

export default WithAddNewJournalFormik(AddNewJournalForm);
