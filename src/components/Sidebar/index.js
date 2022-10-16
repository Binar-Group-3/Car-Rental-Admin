import { Link, NavLink } from "react-router-dom";
// import MiniLogo from "../../../assets/mini_logo.svg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import React from "react";
import '../Navbar/style.scss'

const Sidebar = ({ sidebar }) => {
  return (
    <div className="ikhlas">
      <div className="fixed md:block w-20 hidden left-0 top-0 bottom-0 bg-blue-900 overscroll-auto hover:overscroll-contain overflow-auto z-50">
        <div className="h-16 flex items-center justify-center stiky bg-blue-900 sticky top-0 ">
          <Link>
            {/* <img className="" src={MiniLogo} alt="MiniLogo" /> */}
          </Link>
        </div>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-blue-800 h-16 flex items-center justify-center"
              : isPending
              ? ""
              : ""
          }
        >
          <div className="flex flex-col items-center">
            <HomeOutlinedIcon sx={{ color: "#fff" }} />
            <p className="text-white text-xs">Dashboard</p>
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/car"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-blue-800 h-16 flex items-center justify-center"
              : isPending
              ? ""
              : ""
          }
        >
          <div className="h-16 w-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              <LocalShippingOutlinedIcon sx={{ color: "#fff" }} />
              <p className="text-white text-xs">Car</p>
            </div>
          </div>
        </NavLink>
        <div className="h-screen"></div>
      </div>
      <div
        className={`fixed md:block w-40 hidden left-20 top-16 bottom-0 overscroll-auto hover:overscroll-contain overflow-auto transition-all z-40 bg-white z-40 ${
          sidebar === true ? "md:-translate-x-40" : "md:translate-x-0"
        }`}
      >
        <div className="flex flex-col">
          <h4 className="m-4">Dashboard</h4>
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-blue-300 px-4 py-2 font-medium"
                : isPending
                ? "px-4 py-2"
                : "px-4 py-2"
            }
          >
            Dashboard
          </NavLink>
        </div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
};

export default Sidebar;
