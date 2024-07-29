import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Default",
                login : "00"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/charlie-2201");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json
        });
    }

    render() {
        const {name, location, login} = this.state.userInfo;
        return (
            <div className="user-data">
                <h1>Name : {name}</h1>
                <h2>Location : {location}</h2>
                <h3>Contact : @{login}</h3>
            </div>
        )
    }
}

export default UserClass
