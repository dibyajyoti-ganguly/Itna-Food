import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [isMobileView, setIsMobileView] = useState(
    window.innerWidth <= 810 ? "1" : "0"
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth <= 810 ? setIsMobileView("1") : setIsMobileView("0");
    });
  });

  return isMobileView;
};

export default useWindowSize;
