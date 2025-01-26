import { CDN_URL } from "../utils/constants";

const GroceryCard = ({ grocData }) => {
  console.log(grocData);

  const { images, category, display_name, price, sku_quantity_with_combo } =
    grocData;

  const { store_price, offer_price } = price;

  const image_id = images[0];

  return (
    <div className="m-[5px] p-[5px] w-[140px] h-[240px] font-mono font-semibold text-xs text-slate-500 bg-neutral-100 shadow-md leading-4 cursor-pointer rounded-md border-4 border-transparent hover:border-orange-500">
      <img
        className="h-2/4 w-[192px] rounded-md"
        src={CDN_URL + image_id}
        alt="resimg"
      />
      <h3 className="mt-2 mb-1 text-black font-bold text-sm overflow-hidden text-ellipsis line-clamp-2">
        {display_name}
      </h3>
      <h4>{sku_quantity_with_combo}</h4>
      <p className="truncate">{category}</p>
      {store_price > offer_price ? (
        <p className="truncate">
          <span className="font-bold text-red-500">₹{offer_price}</span>{" "}
          <span className="line-through text-gray-500">₹{store_price}</span>
        </p>
      ) : (
        <p className="truncate">₹{store_price}</p>
      )}
    </div>
  );
};

export default GroceryCard;
