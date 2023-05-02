import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="text-white bg-[#0f0f0f]">
        <ul className="list-none flex p-5 ml-[15rem]">
          <Link to="/">
            <li className="pr-5 cursor-pointer underline"> Set Meeting</li>
          </Link>
          <Link to="todo">
            <li className="cursor-pointer underline"> Todo Task</li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </>
  );
};


export default Navbar;
