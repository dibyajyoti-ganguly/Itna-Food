import React from "react";
import { USER_URL } from "../utils/constants";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

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
    const { name, location, public_repos, avatar_url, followers, following } =
      this.state.userInfo;
    return (
      <div className="flex justify-around w-[365px] mt-5 pt-3 pb-3 items-center font-mono font-semibold tracking-normal text-base leading-6 bg-neutral-100 rounded-2xl shadow-md ">
        <img
          className=" h-[150px] w-[150px] rounded-2xl"
          src={avatar_url}
          alt="User Profile"
        />
        <div className="text-slate-500">
          <p>Name : {name}</p>

          <p>Public Repos : {public_repos}</p>

          <p>Followers : {followers}</p>

          <p>Following : {following}</p>

          <p>Location : {location}</p>
        </div>
      </div>
    );
  }
}

export default UserClass;
