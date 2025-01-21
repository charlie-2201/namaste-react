import { useContext } from "react";
import { CDN_URL } from "../common/constant";
import UserContext from "../common/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } = resData?.info;
  const { loggedInUser } = useContext(UserContext)
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  )
}



export const withRestaurantOpened = (RestaurantCard) => {
  return (props) => {
    const timeString = props?.resData?.info?.availability.nextCloseTime;
    const date = new Date(timeString);
    const formattedTime = `${date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    return (
      <div>
        <label className="absolute bg-black text-white mx-4 p-2 rounded-md">Open Now<br/>Will Close at : {formattedTime}</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export const withRestaurantClosed = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white mx-4 p-2 rounded-md">Closed Now</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;