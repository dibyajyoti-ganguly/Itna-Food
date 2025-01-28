import React, { lazy, useState, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Errorcomp from "./components/Errorcomp";
import Body from "./components/Body";
import Grocery from "./components/Grocery";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

//const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [change, setChange] = useState("");
  const [val, setVal] = useState(0);
  const [username, setUsername] = useState("You");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ username: username, setUsername }}>
        <div className="bg-zinc-200 pt-2 min-h-screen">
          <UserContext.Provider value={{ username: "Dibyajyoti" }}>
            <Header updateType={setChange} nval={val} updateVal={setVal} />
          </UserContext.Provider>

          <Outlet context={{ nval: val, type: change }} />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/grocery",
          element: (
            //<Suspense fallback={<Shimmer />}>
            <Grocery />
            //</Suspense>
          ),
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        },
      ],
      errorElement: <Errorcomp />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider future={{ v7_startTransition: true }} router={appRouter} />
  </React.StrictMode>
);
