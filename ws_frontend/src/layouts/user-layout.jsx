import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = () => {


    
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
