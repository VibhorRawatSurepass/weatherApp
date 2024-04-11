import { lazy } from "react";
import { Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";
const CityTable = lazy(() => import("../views/pages/CityTable"));
const WeatherScreen = lazy(() => import("../views/pages/WeatherScreen"));

export default function AppRouter() {
  return {
    element: <AppLayout />,
    children: [
      { path: "/", element: <CityTable /> },
      { path: "/:city", element: <WeatherScreen /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
}
