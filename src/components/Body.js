import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    };

    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />;
    // }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value = {searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        console.log(listOfRestaurants)
                        const filteredRes = listOfRestaurants.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase()); 
                        });
                        setfilteredRestaurant(filteredRes);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    let filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    console.log(filteredList)
                    setListOfRestaurants(filteredList)
                }}>Top rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))}
            </div>
        </div>
    )
}

export default Body;