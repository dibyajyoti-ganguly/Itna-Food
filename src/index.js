import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Errorcomp from "./components/Errorcomp";
import Body from "./components/Body";
import Header from "./components/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {

  const [change, setChange] = useState("");
  const [val,setVal] = useState(0);

  return (
    <div className="app">
      <Header  updateType={setChange} nval={val} updateVal={setVal}/>
      <Outlet context={{ nval: val, type: change }}/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Errorcomp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
