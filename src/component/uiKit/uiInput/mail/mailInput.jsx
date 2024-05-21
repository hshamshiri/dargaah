

import UiInputText from "../uiInput";
import { useTranslation } from "react-i18next";


export default function MailInput({ formik }) {
    const [t] = useTranslation();
    return (
        <UiInputText
            fullWidth
            id="mail"
            name="mail"
            label={t("login.form.mail")}
            value={formik.values.mail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.mail && Boolean(formik.errors.mail)}
            helperText={formik.touched.mail && formik.errors.mail}
            iconType={"button"}
            iconName={"mail"}
            //startAdornment
            endAdornment
            captcha={false}
            maxLength={40}
        />
    );
};




