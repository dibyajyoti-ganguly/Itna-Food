import { useState, useEffect } from "react";
import { DLIST_URL, MLIST_URL } from "../utils/constants";
import useWindowSize from "./useWindowSize";

const useRestaurantList = () => {
  const [list, setList] = useState([]);
  const isMobileView = useWindowSize();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use the correct API endpoint path - remove .js and use the right filename
        const data = await fetch(
          isMobileView == 1
            ? "https://itna-food-backend.onrender.com/mapi/"
            : "https://itna-food-backend.onrender.com/dapi/"
        );
        const json = await data.json();

        // Make sure this path matches the structure of your API response
        let newList =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // Add a check in case the structure is different
        if (!newList) {
          console.error("Restaurant list not found in API response:", json);
          return;
        }

        newList = newList.slice(0, 18);
        setList(newList);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchData();
  }, [isMobileView]); // Include isMobileView in dependency array

  return { list, setList };
};

export default useRestaurantList;
