import { useRef } from "react"
import AdminDashedButton from "./adminDashedButton";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { deleteRequest } from "../../../utils/network/requsets/deleteRequest";
import { useDispatch } from "react-redux";
import { APIs } from "../../../utils/network/apiClient";
import { addDashBox } from "../../../redux/uiConfigeReducer";
import { toast } from "react-toastify"
import AlertDialog from "../uiDialog/uiDialog";
import EditButton from "../uiButton/editButton"
import DeleteButton from "../uiButton/deleteButton";
import AddNewButton from "../uiButton/addNewButton";


const UiAdminDashedBox = ({
  boxInfo,
  handleForms,
  hideLabel,
}) => {

  const [t] = useTranslation();
  const dispatch = useDispatch()

  const dialogRef = useRef()
  const deleteAlarm = () => dialogRef.current()

  const deleteForm = () => {
    deleteRequest(APIs.dashBox.delete_dashbox + boxInfo.id).then((response) => {
      response.data && dispatch(addDashBox(response.data))
      response.error.msg && toast.error(response.error.msg + "\n" + response.error.status)
    })
  };
  return (
    <Grid
      container
      minHeight={200}
      display={"flex"}
      position={"relative"}
      borderRadius={2}
      boxShadow={2}
      marginTop={10}
      borderColor={"lightgray"}
      backgroundColor={"white"}
      sx={{ borderWidth: 1 }}
      xs={12}
      sm={12}
      md={12}

    >

      <AlertDialog myRef={dialogRef} deleteAction={deleteForm} />
      <Box
        height={35}
        minWidth={100}
        display={hideLabel ? "flex" : "none"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"#555"}
        paddingX={1}
        position={"absolute"}
        top={-20}
        right={10}
        zIndex={1}
        border={0}
        borderColor={"gray"}
        sx={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          //background: "#fcfcfc",
          fontSize: "140%",
          fontWeight: "bold",
          color: "gray",
          background: "white"
        }}
      >
        {boxInfo?.label}
      </Box>
      <Box display={"flex"} position={"absolute"} backgroundColor={"white"} left={1} top={-25}>
        <DeleteButton onClick={deleteAlarm} />
        <EditButton onClick={() => handleForms("dashedBox", boxInfo)} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          padding: 2,
          gridTemplateColumns: {
            xs: "repeat(2, 2fr)",
            sm: "repeat(3, 2fr)",
            md: "repeat(4, 2fr)",
            lg: "repeat(6, 2fr)",
          },
          direction: "rtl"
        }}
      >
        {boxInfo && boxInfo?.buttons.map((button, i) => (
          <AdminDashedButton
            key={uuidv4()}
            boxInfo={boxInfo}
            buttonInfo={button}
            handleForms={handleForms}
          />

        )
        )}

        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 0,
          paddingBottom: 0,
          '& > :not(style)': { m: 5 }
        }}>
          <AddNewButton onClick={() => handleForms("addButtonOfDashedBox", boxInfo)} />
        </Box>
      </Box>
    </Grid >
  );
};

export default UiAdminDashedBox;
