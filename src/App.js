import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";

function App() {

  const [change, setChange] = useState("");
  const [val,setVal] = useState(0);

  return (
    <div className="app">
      <Header  updateType={setChange} nval={val} updateVal={setVal}/>
      <Body nval={val} type={change}/>
    </div>
  );
}

export default App;
