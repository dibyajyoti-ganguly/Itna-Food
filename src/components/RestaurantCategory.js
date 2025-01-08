import ItemList from "./ItemList";

const RestaurantCategory = ({
  itemCards,
  title,
  showItems,
  setShowIndex,
  index,
}) => {
  return (
    <div>
      <div className="flex justify-between w-[680px]">
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
