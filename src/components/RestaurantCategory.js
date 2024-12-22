import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ itemCards, title }) => {
  const [click, setClick] = useState(0);

  return (
    <div>
      <div className="flex justify-between w-[680px]">
        <h2 className="text-xl font-extrabold my-5">
          {title}({itemCards.length})
        </h2>
        <button onClick={() => setClick(!click)}>{click ? "▲" : "▼"}</button>
      </div>
      {click ? <ItemList itemCards={itemCards} title={title} /> : null}
      <hr className="border-t-2 border-gray-300" />
    </div>
  );
};

export default RestaurantCategory;
