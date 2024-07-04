import { CDN_URL } from "../common/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
    return (
      <div className="res-card">
        <img className="card-img" src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    )
  }

export default RestaurantCard;