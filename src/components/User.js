import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    return (
        <div className="user-data">
            <h1>Count : {count}</h1>    
            <h1>Count2 : {count2}</h1>
            <h2>Name : {props.name}</h2>
            <h3>Location : Ghaziabad</h3>
            <h4>Contact : @charlie-2201</h4>
        </div>
    )
}

export default User;