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
      <div>
        <h2>Hello!!</h2>
        <p>
          <i>Want to learn more about us?</i> 🤖
        </p>
        <UserClass />
      </div>
    );
  }
}

export default About;
