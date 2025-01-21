import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import UserContext from "./common/UserContext";
import { Provider } from "react-redux";
import appStore from "./common/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

//not using keys (not acceptable) <<<<< use index as key <<<<<<<<<<<< unique id(best practise)

const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Manik Agarwal"
    };
    setUserName(data.name);
  }, [])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const Grocery = lazy(() => import("./components/Grocery"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
