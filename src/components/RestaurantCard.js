import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    sla,
    cuisines,
    locality,
    areaName,
  } = resData.info;
  return (
    <div className="m-[5px] p-[5px] w-[192px] h-[280px] font-mono font-semibold text-sm text-slate-500 bg-neutral-100 shadow-md leading-7 cursor-pointer rounded-md border-4 border-transparent hover:border-orange-500">
      <img
        className="h-2/4 w-[192px] rounded-md"
        src={CDN_URL + cloudinaryImageId}
        alt="resimg"
      />
      <h3 className="truncate pt-2 text-black font-bold text-lg">{name}</h3>
      <h4>
        ⭐{avgRating} • {sla.slaString}
      </h4>
      <p className="truncate">{cuisines.slice(0, 2).join(", ")}</p>
      <p className="truncate">
        {locality}, {areaName}
      </p>
    </div>
  );
};

export default RestaurantCard;
