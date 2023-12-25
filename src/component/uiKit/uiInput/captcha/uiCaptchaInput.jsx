

import UiInputText from "../uiInput";
import { useTranslation } from "react-i18next";

const UiCaptchaInput = ({ formik }) => {
    const [t] = useTranslation();
    return (
        <UiInputText
            fullWidth
            id="captcha"
            name="captcha"
            label={t("login.form.captcha")}
            value={formik.values.captcha}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.captcha && Boolean(formik.errors.captcha)}
            helperText={formik.touched.captcha && formik.errors.captcha}
            required={true}
            iconType="send"
            //startAdornment
            endAdornment
        />
    );
};

export default UiCaptchaInput;
