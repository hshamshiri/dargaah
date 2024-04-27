
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import infoIcon from "../../images/icons/InfoIcon.png";
import phoneIcon from "../../images/icons/PhoneIcon.png";
import messageIcon from "../../images/icons/messageQuestionIcon.png";



const Divider = () => {
    return <span className={`border h-5 opacity-30 cursor-pointer`} />;
};

const SingleIcon = ({ route, onclick, imageSrc }) => {
    return (
        <Link to={route} target="_blank">
            <img
                alt="contact"
                src={imageSrc}
                onClick={() => onclick()}
                className="mx-4 cursor-pointer"
            />
        </Link>
    );
};


const ContactIcons = () => {
    const iconAction = () => { };
    return (

        <Box className="flex flex-row  w-1/3 mt-3 items-center ">
            <SingleIcon route="#" onclick={iconAction} imageSrc={infoIcon} />
            {/* <UiIcon iconName={"contact"} /> */}
            <Divider />
            <SingleIcon route="#" onclick={iconAction} imageSrc={messageIcon} />
            <Divider />
            <SingleIcon route="#" onclick={iconAction} imageSrc={phoneIcon} />
        </Box>

    )
}


export default ContactIcons