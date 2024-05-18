import React, { useRef, useState } from "react";
import SecondaryButton from "../utils/buttons/secondaryButton";
import { alertIcon, searchIcon } from "../../assets";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("handle search", searchInput);
  };

  const ref = useRef(null);

  const handleClickOutside = (event: Event) => {
    // @ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      setShowProfileMenu(false);
    }
  };

  document.addEventListener("click", handleClickOutside, true);

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
            bgColor={"#ccc"}
          />
        </NavLink>
        <div className="relative flex items-center">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search"
            type="text"
            className="py-3 pl-2 focus:outline-none text-white text-lg placeholder:text-lg placeholder:text-white pr-[50px] bg-gray-700 border-white border-[1px] w-[200px] rounded-2xl"
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
              className="h-full w-full bg-cover cursor-pointer"
              src="https://i.pinimg.com/280x280_RS/54/ff/7a/54ff7a5fab4de5e729aa065e32e1ce64.jpg"
              alt=""
              onClick={() => {
                setShowProfileMenu(true);
              }}
            />
          </div>
        </div>

        {showProfileMenu && (
          <>
            <div
              ref={ref}
              className="w-[250px] z-[50] bg-gray-100 cursor-pointer shadow-2xl absolute py-2 rounded-xl top-[90px]"
            >
              <div className="border-b-[1px] border-[#ccc] text-xl py-1 px-2 font-medium cursor-pointer">
                View Profile
              </div>
              <div
                onClick={() => {
                  localStorage.removeItem("c4CarLoginStatus");
                  window.location.reload();
                }}
                className="cursor-pointer py-1 px-2 text-xl font-medium"
              >
                Logout
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
