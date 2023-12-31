import UiInputText from "../uiInput";
import { useTranslation } from "react-i18next";

const UiMobileInput = ({ formik }) => {
  const [t] = useTranslation();
  return (
    <UiInputText
      fullWidth
      id="mobile"
      name="mobile"
      label={t("login.form.mobileNum")}
      value={formik.values.mobile}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.mobile && Boolean(formik.errors.mobile)}
      helperText={formik.touched.mobile && formik.errors.mobile}
      required={true}
      iconType="button"
      iconName="mobile"
      //startAdornment
      endAdornment
      maxLength={11}

    />

  );
};

export default UiMobileInput;
