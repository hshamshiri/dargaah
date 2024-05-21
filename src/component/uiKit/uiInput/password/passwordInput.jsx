import UiInputText from "../uiInput";
import { useTranslation } from "react-i18next";

export default function PasswordInput({ formik }) {
    const [t] = useTranslation();
    return (
        <UiInputText
            id="password"
            name="password"
            label={t("login.form.password")}
            formik={formik}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            iconName="password"
            //startAdornment
            endAdornment
            maxLength={20}
        />
    );
};


