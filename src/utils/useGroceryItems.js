import { useState, useEffect } from "react";
import { GROC_URL, GROC2_URL } from "./constants";

const useGroceryItems = () => {
  const [grocitems, setGrocItems] = useState(null);

  useEffect(
    () =>
      async function fetchData() {
        const data = await fetch(GROC_URL);
        const sec_data = await fetch(GROC2_URL);
        const json = await data.json();
        const sec_json = await sec_data.json();
        let newItems = json?.data?.widgets[2]?.data;
        const newestItems = sec_json?.data?.widgets[2]?.data;
        newItems = newItems.concat(newestItems);
        newItems = newItems.slice(0, newItems.length - 4);
        setGrocItems(newItems);
      },
    []
  );
  return { grocitems, setGrocItems };
};

export default useGroceryItems;
