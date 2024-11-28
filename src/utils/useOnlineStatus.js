import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  const [onlinestatus, setOnlinestatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlinestatus(false);
    });
    window.addEventListener("online", () => {
      setOnlinestatus(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return onlinestatus;
};

export default useOnlineStatus;
