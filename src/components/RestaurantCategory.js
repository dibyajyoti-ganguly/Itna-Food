import ItemList from "./ItemList";
import useWindowSize from "../utils/useWindowSize";

const RestaurantCategory = ({
  itemCards,
  title,
  showItems,
  setShowIndex,
  index,
}) => {
  const isMobileView = useWindowSize();

  return (
    <div>
      <div
        className={
          isMobileView == 1
            ? "flex justify-between"
            : "flex justify-between w-[680px]"
        }
      >
        <h2 className="text-xl font-extrabold my-5">
          {title}({itemCards.length})
        </h2>
        <button onClick={() => setShowIndex(index)}>▼</button>
      </div>
      {showItems ? <ItemList itemCards={itemCards} title={title} /> : null}
      <hr className="border-t-2 border-gray-300" />
    </div>
  );
};

export default RestaurantCategory;
