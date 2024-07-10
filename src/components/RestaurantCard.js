import { CDN_URL } from "../common/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } = resData?.info;
    return (
      <div className="res-card">
        <img className="card-img" src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    )
  }

export default RestaurantCard;