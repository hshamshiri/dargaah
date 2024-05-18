

import { Box } from "@mui/material";
import UiInputText from "../uiInput";
import { useTranslation } from "react-i18next";
import Icon from "../../../uiKit/uiIcon/uiIcon"



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
            iconType={"button"}
            iconName={"send"}
            //startAdornment
            endAdornment
            captcha={true}
            captchaView={() => (<Box height={"100%"} padding={1} >sadfs</Box>)}
            maxLength={6}
        />
    );
};



export default UiCaptchaInput;
