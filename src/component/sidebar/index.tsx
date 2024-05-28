import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  homeRedIcon,
  homeWhiteIcon,
  servicesRedIcon,
  servicesWhiteIcon,
  usedCarsRedIcon,
  usedCarsWhiteIcon,
  spherePartRed,
  spherePartWhite,
  chatRedIcon,
  chatWhiteIcon,
  offerRedIcon,
  offerWhiteIcon,
  reminderRedIcon,
  reminderWhiteIcon,
  customerRedIcon,
  customerWhiteIcon,
  c4carLogo,
  group1956,
  searchIcon,
} from "../../assets";
import { c4carLogoImage } from "../../assets";

const sidebarList = [
  {
    name: "Home",
    icon1: homeRedIcon,
    icon2: homeWhiteIcon,
    path: "/home",
  },
  {
    name: "Services",
    icon1: servicesRedIcon,
    icon2: servicesWhiteIcon,
    path: "/services",
  },
  {
    name: "Used cars",
    icon1: usedCarsRedIcon,
    icon2: usedCarsWhiteIcon,
    path: "/usedCars",
  },
  {
    name: "Spare Part",
    icon1: spherePartRed,
    icon2: spherePartWhite,
    path: "/sparePart",
  },
  {
    name: "Chat",
    icon1: chatRedIcon,
    icon2: chatWhiteIcon,
    path: "/Chat",
  },
  {
    name: "Offers",
    icon1: offerRedIcon,
    icon2: offerWhiteIcon,
    path: "/offers",
  },
  {
    name: "Reminder",
    icon1: reminderRedIcon,
    icon2: reminderWhiteIcon,
    path: "/reminder",
  },
  {
    name: "Customers",
    icon1: customerRedIcon,
    icon2: customerWhiteIcon,
    path: "/customers",
  },
];

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  return (
    <div className="py-5 pl-2">
      <div className="text-white flex flex-col gap-5 relative">
        <div className="min-h-[80px]">
          <div className="text-3xl flex justify-center items-center">
            {openSidebar ? (
              <div className="">
                <div
                  style={{
                    backgroundImage: c4carLogo,
                  }}
                  className="w-[90%] h-[90%] flex justify-center items-center"
                >
                  <img className="z-50" src={group1956} alt="" />
                </div>
              </div>
            ) : (
              <div className="w-[70px] h-[70px] flex justify-center items-center">
                <img className="z-50" src={c4carLogo} alt="" />
              </div>
            )}
          </div>
        </div>
        <div className="">
          {/* <div className="flex flex-col gap-9"> */}
          <div className="flex flex-col gap-4">
            {sidebarList.map((item, index: number) => {
              return (
                <NavLink
                  key={index}
                  className={` ${
                    openSidebar ? "min-w-[200px]" : "min-w-[70px]"
                  }  pl-[20px] relative pr-[1px] py-5 rounded-l-full font-bold flex items-center text-[17px]`}
                  to={item.path}
                  style={({ isActive }) => ({
                    color: isActive ? "#990000" : "white",
                    backgroundColor: isActive ? "white" : "",
                  })}
                >
                  {({ isActive }) => (
                    <div className="flex items-center gap-2">
                      <div className="h-[20px] w-[20px]">
                        {isActive ? (
                          <img src={item.icon1} alt="" />
                        ) : (
                          <img src={item.icon2} alt="" />
                        )}
                      </div>
                      <p
                        className={`${openSidebar ? "" : "hidden"} flex-nowrap`}
                      >
                        {item.name}
                      </p>

                      {isActive && (
                        <div>
                          <div className="h-[80px] w-[25px] absolute top-[-7px] rounded-l-3xl bg-white right-0"></div>
                        </div>
                      )}
                    </div>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
