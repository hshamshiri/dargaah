import { useState } from "react";
import WithMaterialUI from "../../../component/hoc/withLoginFormik";
import { useTranslation } from "react-i18next";
import UiMobileInput from "../../../component/uiKit/uiInput/mobile/uiMobileInput";
import UiButton from "../../../component/uiKit/uiButton/uiButton";

const PasswordLoginView = ({ onSubmit, formik }) => {
  const [phone, setPhone] = useState(0);
  const [code, setCode] = useState("");
  const [t] = useTranslation();

  //   const changePhone = (e) => {
  //     setPhone(e.target.value);
  //   };
  const submitAction = () => {
    console.log("suuubmit");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <UiMobileInput formik={formik} />

      <UiButton
        type="submit"
        label={"ارسال کد"}
        onclick={submitAction}
        variant="contained"
      />
      {/* <UiInputText
        label="تلفن همراه"
        onChange={changePhone}
        helperText={"شماره تلفن همراه راوارد نمایید"}
        //type={"num"}
        required={true}
      /> */}
      {/* <UiInputText label="تلفن همراه" onChange={changePhone} /> */}
    </form>
  );
};

export default WithMaterialUI(PasswordLoginView);
