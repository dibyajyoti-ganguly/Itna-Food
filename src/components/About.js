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
      <div className="m-4 p-4 text-slate-500 font-mono text-2xl font-bold">
        <h2>Hello!!</h2>
        <p>
          <i>Want to learn more about us?</i> 🤖
        </p>
        <br />
        <UserClass />
      </div>
    );
  }
}

export default About;
