import UiInputText from "../uiInput";
import { useTranslation } from "react-i18next";

export default function UsernameInput({ formik }) {
  const [t] = useTranslation();
  console.log(formik)
  return (
    <UiInputText
      id="username"
      name="username"
      label={t("login.form.username")}
      formik={formik}
      value={formik.values.username}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.username && Boolean(formik.errors.username)}
      helperText={formik.touched.username && formik.errors.username}
      iconName="username"
      //startAdornment
      endAdornment
      maxLength={11}
    />
  );
};


