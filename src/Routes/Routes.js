import { createBrowserRouter } from "react-router-dom";
import DrawerLeft from "../components/DrawerLeft";
import Main from "../components/Main";
import SingleCurrency from "../components/SingleCurrency";
import Exchanges from "../components/Exchanges";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <><DrawerLeft/><Main /></>,
  },
  {
    path: "/cryptocurrencies",
    element: <><DrawerLeft/><Main /></>,
  },
  {
    path: "/news",
    element: <><DrawerLeft/><Main /></>,
  },
  {
    path: "/exchanges",
    element: <><DrawerLeft/><Exchanges /></>,
  },
  {
    path: "/cryptocurrencies/:id",
    element: <><DrawerLeft/><SingleCurrency /></>,
  },
]);
