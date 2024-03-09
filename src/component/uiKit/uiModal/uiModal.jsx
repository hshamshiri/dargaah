import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import UiButton from "../uiButton/uiButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
  paddingTop: 7
};

export default function UiModal({ children, activeModal, toggleShowModal }) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={activeModal}
        onClose={toggleShowModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        // sx={{ position: "relative" }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={activeModal}>
          <Box sx={style}>
            <UiButton
              //label={t("dashboard.main.addBtn")}
              variant={"contained"}
              iconName={"close"}
              iconType={"button"}
              iconColor={"red"}
              sx={{
                width: 20,
                minWidth: 40,
                margin: 0.1,
                position: "fixed",
                top: 5,
                left: 5,
                borderRadius: 5,

              }}
              onclick={() => toggleShowModal()} />
            {children}</Box>
        </Fade>
      </Modal>
    </div>
  );
}
