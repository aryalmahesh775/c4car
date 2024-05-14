import React, { useState } from "react";
import SecondaryButton from "../utils/buttons/secondaryButton";
import { alertIcon, searchIcon } from "../../assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    console.log("handle search", searchInput);
  };

  return (
    <div className="bg-primary py-5">
      <div className="flex justify-end gap-10 items-center">
        <NavLink
          className={"rounded-lg"}
          to={"/orderHistory"}
          style={({ isActive }) => ({
            color: isActive ? "#990000" : "white",
            backgroundColor: isActive ? "white" : "#252525",
          })}
        >
          <SecondaryButton
            title={"Order Details"}
            onClick={() => {
              console.log("Order Details button clicked");
            }}
            width={"200px"}
            textColor={"black"}
            bgColor={"#252525"}
          />
        </NavLink>
        <div className="relative flex items-center">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            className="py-3 pl-2 focus:outline-none text-white pr-[50px] bg-gray-700 border-white border-[1px] w-[200px] rounded-2xl"
          />
          <div onClick={handleSearch} className="absolute right-[10px]">
            <img className="" src={searchIcon} alt="" />
          </div>
        </div>
        <div className="h-[50px] rounded-lg flex justify-center items-center w-[50px] bg-gray-700">
          <img
            className="w-[20px] h-[20px] xl:w-[30px] xl:h-[30px]"
            src={alertIcon}
            alt=""
          />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-white font-medium text-base xl:text-xl">
            Mahesh Aryal
          </p>
          <div className="h-[30px] w-[30px] xl:h-[50px] xl:w-[50px] overflow-hidden rounded-full">
            <img
              className="h-full w-full bg-cover"
              src="https://i.pinimg.com/280x280_RS/54/ff/7a/54ff7a5fab4de5e729aa065e32e1ce64.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
