import { useState } from "react";
import useRestaurantMenu from "../common/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null) <Shimmer />;
    else {
        const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
        const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        // console.log(itemCards)
        // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        // console.log(categories)
        return (
            <div className="text-center">
                <h1 className="font-bold my-6 text-2xl">{name}</h1>
                <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
                {categories.map((category, index) => (
                    <RestaurantCategory 
                    key={category.card.card.title} 
                    data={category?.card?.card} 
                    showItems={index === showIndex ? true : false}
                    setShowIndex = {() => setShowIndex(index)}
                    hideItems = {(hide) => setShowIndex(hide)}/>
                ))}
            </div>
        )
    }

}

export default RestaurantMenu;