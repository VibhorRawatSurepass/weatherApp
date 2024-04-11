import React from "react";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="w-full h-full ">
      <Outlet />
    </div>
  );
};

export default AppLayout;
