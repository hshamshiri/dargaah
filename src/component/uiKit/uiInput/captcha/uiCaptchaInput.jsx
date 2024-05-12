

import { Box } from "@mui/material";
import UiInputText from "../uiInput";
import { useTranslation } from "react-i18next";
import Icon from "../../../uiKit/uiIcon/uiIcon"



const CaptchaView = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        }} >
            <div className="w-15 h-full p-1 ">sadfs</div>
            <div> <Icon iconType={"refresh"} iconName={"refresh"} classes={{ right: 0, backgroundColor: "transparent" }} /></div>
            <div><Icon iconType={"volumeUp"} iconName={"volumeUp"} classes={{ backgroundColor: "transparent" }} /></div>
        </Box>
    )

}

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
            captchaView={CaptchaView}
            maxLength={6}
        />
    );
};



export default UiCaptchaInput;
