import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This info is about my website</h2>
            {/* <User name = {"Manik Agarwal (function)"} /> */}
            <UserClass name = {"Sameer Kumar (class)"}/>
        </div>
    ) 
}

export default About;