import { useState } from "react";
import QRCode from "react-qr-code";
//import CountDownTimer from "../../../component/comps/countDown/countDown";
import { Box, Button, Container, Typography } from "@mui/material";
import UiIcon from "../../../component/uiKit/uiIcon/uiIcon";

import Countdown from "react-countdown";

const QRLoginView = () => {
  const [refresh, setRefresh] = useState(false);
  const [start, setStart] = useState(false);
  const [timerCount, setTimerCount] = useState(2000);

  const timerRenderer = ({ hours, minutes, seconds, completed }) => {
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  };
  const onCompleteTime = () => {
    setRefresh(true);
    setTimerCount(0);
  };
  const handleQrRefresh = () => {
    setRefresh(false);
    setStart(!start);
    setTimerCount(3000);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        onClick={handleQrRefresh}
        disabled={!refresh}
        variant="dashed"
        sx={{ borderRadius: 5, padding: 2, marginTop: 5 }}
      >
        <QRCode
          size={128}
          style={{
            opacity: refresh ? 0.1 : 1,
          }}
          value={"https://sso.my.gov.ir/login"}
          viewBox={`0 0 256 256`}
        />

        <Box sx={{ position: "absolute", opacity: refresh ? 1 : 0 }}>
          <UiIcon
            iconName="refresh"
            classes={{
              width: 90,
              height: 90,
              fontSize: 90,
            }}
          />
          <Typography>دریافت مجدد</Typography>
        </Box>
      </Button>

      <Countdown
        key={start}
        date={Date.now() + timerCount}
        onComplete={() => onCompleteTime()}
        renderer={timerRenderer}
      />
    </Container>
  );
};

export default QRLoginView;
