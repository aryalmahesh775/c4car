import React from "react";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const RejectButton = () => {
  return (
    <div>
      <div>
        <div>
          <button
            onClick={() => {}}
            className={`
         bg-[#D71926]
         w-[80px] top-[5px] relative  h-[28px] p-0 m-auto  items-center  rounded-full flex transition duration-500 shadow-2xl`}
          >
            <span
              className={`bg-white text-[#D71926] flex justify-center items-center transition duration-500 rounded-full w-[25px] ml-1 h-[24px] m-0 p-0 shadow-xl`}
            >
              <ImCross size={10} />
            </span>
            <p className={`absolute font-medium left-9 text-sm text-white`}>
              Reject
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectButton;
