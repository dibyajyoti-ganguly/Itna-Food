import React from "react";
import { USER_URL } from "../utils/constants";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.name + "Child Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        public_repos: "0",
        avatar_url: "",
        followers: "0",
        following: "0",
      },
    };
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child Component Did Mount");
    console.log("Component Mounted");
    const data = await fetch(USER_URL);
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    //console.log(this.props.name + "Child Render");

    const { name, location, public_repos, avatar_url, followers, following } =
      this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="User Profile" />
        <div className="user-detail">
          <i>
            <p>Name : {name}</p>
          </i>
          <i>
            <p>Public Repos : {public_repos}</p>
          </i>
          <i>
            <p>Followers : {followers}</p>
          </i>
          <i>
            <p>Following : {following}</p>
          </i>
          <i>
            <p>Location : {location}</p>
          </i>
        </div>
      </div>
    );
  }
}

export default UserClass;
