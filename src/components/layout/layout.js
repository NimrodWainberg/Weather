import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GroupButtons } from "../small_components/buttons";

const Layout = () => {
  // const notify = () => toast("Wow so easy!");

  const navigate = useNavigate();

  const handleClick = (event) => {
    console.log(event);
    navigate(`/${event.target.value}`);
  };

  return (
    <div className="">
      <div className="dashboard">
        <h1>Dashboard</h1>
        <GroupButtons onClick={(e) => handleClick(e)}></GroupButtons>
      </div>
      <main>
        <ToastContainer />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
