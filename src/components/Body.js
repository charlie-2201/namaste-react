import RestaurantCard, { withRestaurantOpened, withRestaurantClosed } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../common/useOnlineStatus";
import UserContext from "../common/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardOpened = withRestaurantOpened(RestaurantCard);
    const RestaurantCardClosed = withRestaurantClosed(RestaurantCard);

    const {loggedInUser, setUserName} = useContext(UserContext);

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
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurants)
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return (<h1>Looks like you're offline. Please check your internet connection.</h1>)
    }
    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />;
    // }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={() => {
                        console.log(listOfRestaurants)
                        const filteredRes = listOfRestaurants.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredRestaurant(filteredRes);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                    let filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.4);
                    console.log(filteredList)
                    setFilteredRestaurant(filteredList)
                }}>Top rated Restaurants</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label>Username :</label>
                <input className="border m-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"restaurants/" + restaurant.info.id}>
                            {restaurant.info.isOpen ? <RestaurantCardOpened resData={restaurant}/> : <RestaurantCardClosed resData={restaurant} />}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;