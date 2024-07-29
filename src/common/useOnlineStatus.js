import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true)
            console.log("You are now connected to the network.");
        });
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
            console.log("PLease check your internet connection, something is missing over there.");
        });
    }, []);

    return onlineStatus;
}

export default useOnlineStatus;