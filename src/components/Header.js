import { useContext, useState } from "react";
import { LOGO_URL } from "../common/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../common/useOnlineStatus";
import UserContext from "../common/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  
  return (
    <div className="flex justify-between bg-pink-100">
      <div className="logo-container">
        <img className="w-36 ml-4" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-xl">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 text-xl"><Link to = "/">Home</Link></li>
          <li className="px-4 text-xl"><Link to = "/about">About Us</Link></li>
          <li className="px-4 text-xl"><Link to = "/contact">Contact Us</Link></li>
          <li className="px-4 text-xl"><Link to = "/grocery">Grocery</Link></li>
          <li className="px-4 -mt-1 font-bold text-2xl"><Link to = "/cart">🛒({cartItems.length})</Link></li>
          <button className="mx-4 px-4 py-1 -mt-1 bg-white cursor-pointer text-xl" onClick={() => {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            console.log(btnNameReact);
          }}>{btnNameReact}</button>
          <li className="px-4 text-xl font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;

