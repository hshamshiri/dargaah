

import { Box } from "@mui/material";
import UiInputText from "../uiInput";
import { useTranslation } from "react-i18next";
import Icon from "../../../uiKit/uiIcon/uiIcon"



const CaptchaView = () => {
    return (
        <Box flex={"row"} >
            <div><Icon iconType={"volumeUp"} classes={{ backgroundColor: "transparent" }} /></div>
            <div> <Icon iconType={"refresh"} classes={{ right: 30, backgroundColor: "transparent" }} /></div>
            <div className="w-20 h-full p-2 border ml-12"><image />sadfs</div>
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
            iconType="send"
            //startAdornment
            endAdornment
            captcha={true}
            captchaView={CaptchaView}
            maxLength={6}
        />
    );
};



export default UiCaptchaInput;
