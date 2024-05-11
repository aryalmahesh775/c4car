import React, { useState } from "react";
import SecondaryButton from "../utils/buttons/secondaryButton";
import { alertIcon, searchIcon } from "../../assets";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    console.log("handle search", searchInput);
  };

  return (
    <div className="bg-primary py-5">
      <div className="flex justify-end gap-10 items-center">
        <SecondaryButton
          title={"Order Details"}
          onClick={() => {
            console.log("Order Details button clicked");
          }}
          width={"200px"}
          textColor={"black"}
          bgColor={"#ccc"}
        />
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
