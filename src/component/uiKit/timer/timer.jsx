import Countdown from "react-countdown";
import { useState } from "react";

const Timer = ({ hours, minutes, seconds, completed }) => {
  return (
    <span>
      {minutes}:{seconds}
    </span>
  );
};

export default function CountdownTimer() {
  const [start, setStart] = useState(false);
  const [timerCount, setTimerCount] = useState(10000);
  const [refresh, setRefresh] = useState(false);

  const onCompleteTime = () => {
    setRefresh(true);
    setTimerCount(0);
  };
  const handleRefresh = () => {
    setRefresh(false);
    setStart(!start);
    setTimerCount(3000);
  };
  return (
    <Countdown
      key={start}
      date={Date.now() + timerCount}
      onComplete={() => onCompleteTime()}
      renderer={Timer}
    />
  );
}
