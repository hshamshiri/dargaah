import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

const useBackEvent = (callback) => {
  const [isBack, setIsBack] = useState(false);
  const { loginState, setLoginState } = useAuth();

  const handleEvent = () => {
    console.log("wwwwww:", loginState);
    // if (loginState === "report") console.log("ppppp", loginState);
    // if (loginState === "term") console.log("ooooo:", loginState);
    // if (loginState === "term") {
    //   setIsBack(false);
    //   setLoginState("report");
    //   callback();
    // }
    // if (loginState === "report") setIsBack(false);
    // setIsBack(true);
    //callback();
  };

  useEffect(() => {
    window.addEventListener("popstate", handleEvent);
    return () => window.removeEventListener("popstate", handleEvent);
  }, []);

  return isBack;
};

export default useBackEvent;
