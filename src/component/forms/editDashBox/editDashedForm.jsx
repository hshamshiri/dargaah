import React from "react";
import { Box } from "@mui/material";
import UiEditDashedBox from "../../uiKit/uiEditDashedBox/uiEditDashedBox";

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
      <UiEditDashedBox buttons={currentBox?.buttons} />
    </Box>
  );
};

export default EditDahedForm;
