import React from "react";
import { Box } from "@mui/material";
import UiDashedBox from "../../uiKit/uiDashedBox/uidDashedBox";

const EditDahedForm = ({
  interfaceUI,
  setInterfaceUI,
  toggleShowModal,
  boxId,
}) => {
  const currentBox = interfaceUI?.dashedBorderContainers?.dashBoxes.find(
    (box) => box.id === boxId
  );

  return (
    <Box>
      <UiDashedBox buttons={currentBox?.buttons} />
    </Box>
  );
};

export default EditDahedForm;
