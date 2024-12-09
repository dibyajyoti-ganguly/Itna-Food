import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div className="flex flex-col items-center mt-[80px] justify-around font-mono tracking-tighter font-bold">
        <h1 className="text-4xl font-sans">ABOUT US</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;
