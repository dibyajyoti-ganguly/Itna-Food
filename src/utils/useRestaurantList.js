import { useState, useEffect } from "react";
import { DLIST_URL, MLIST_URL } from "../utils/constants";
import useWindowSize from "./useWindowSize";

const useRestaurantList = () => {
  const [list, setList] = useState([]);
  const isMobileView = useWindowSize();

  useEffect(
    () =>
      async function fetchData() {
        const data = await fetch(isMobileView == 1 ? MLIST_URL : DLIST_URL);
        const json = await data.json();
        let newList =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        newList = newList.filter((res) => {
          return (
            !res.info.name.includes("45th") &&
            !res.info.name.includes("Labonel")
          );
        });
        setList(newList);
      },
    []
  );
  return { list, setList };
};

export default useRestaurantList;
