import { CDN_URL } from "../utils/constants";

const GroceryCard = ({ grocData }) => {
  console.log(grocData);

  const { imageId, displayName } = grocData;

  return (
    <div className="m-[5px] p-[5px] w-[192px] h-[280px] font-mono font-semibold text-sm text-slate-500 bg-neutral-100 shadow-md leading-7 cursor-pointer rounded-md border-4 border-transparent hover:border-orange-500">
      <img
        className="h-2/4 w-[192px] rounded-md"
        src={CDN_URL + imageId}
        alt="resimg"
      />
      <h3 className="truncate pt-2 text-black font-bold text-lg">
        {displayName}
      </h3>
      <h4>⭐3.1</h4>
      <p className="truncate">Hello</p>
      <p className="truncate">Hello</p>
    </div>
  );
};

export default GroceryCard;
