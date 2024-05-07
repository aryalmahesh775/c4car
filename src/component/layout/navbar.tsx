import React from "react";
import SecondaryButton from "../utils/buttons/secondaryButton";

const Navbar = () => {
  return (
    <div className="bg-primary py-5">
      <div className="flex justify-end gap-10 items-center">
        <SecondaryButton
          title={"Order Details"}
          onClick={() => {
            console.log("Order Details button clicked");
          }}
          textColor={"black"}
          bgColor={"white"}
        />
        <div className="">alert</div>
        <div className="flex items-center gap-3">
          <p className="text-white font-medium text-xl">Mahesh Aryal</p>
          <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
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
