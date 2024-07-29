import { useState } from "react";
import { LOGO_URL } from "../common/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../common/useOnlineStatus";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
          <li className="px-4 text-xl">Cart</li>
          <button className="mx-4 px-4 py-1 -mt-1 bg-white cursor-pointer text-xl" onClick={() => {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            console.log(btnNameReact);
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;

