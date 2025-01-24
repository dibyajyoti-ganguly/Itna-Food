import { useState, useEffect } from "react";
import { GROC_URL } from "./constants";

const useGroceryItems = () => {
  const [grocitems, setGrocItems] = useState(null);

  useEffect(
    () =>
      async function fetchData() {
        const data = await fetch(GROC_URL);
        const json = await data.json();
        const newItems = json?.data?.widgets[1]?.data;
        setGrocItems(newItems);
      },
    []
  );
  return { grocitems, setGrocItems };
};

export default useGroceryItems;
