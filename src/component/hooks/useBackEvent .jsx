import { useEffect, useState } from "react";

const useBackEvent = (callback) => {
  const [isBack, setIsBack] = useState(false);

  const handleEvent = () => {
    setIsBack(true);
    callback();
  };

  useEffect(() => {
    window.addEventListener("popstate", handleEvent);
    return () => window.removeEventListener("popstate", handleEvent);
  }, []);

  return isBack;
};

export default useBackEvent;
