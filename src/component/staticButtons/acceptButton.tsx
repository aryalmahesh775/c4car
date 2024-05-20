import React from "react";
import { TiTick } from "react-icons/ti";

const AcceptButton = () => {
  return (
    <div>
      <div>
        <button
          onClick={() => {}}
          className={`
         bg-[#77B82A]
         w-[80px] top-[5px] relative  h-[28px] p-0 m-auto  items-center  rounded-full flex transition duration-500 shadow-2xl`}
        >
          <span
            className={`bg-white text-[#77B82A] flex justify-center items-center transition duration-500 rounded-full w-[25px] ml-1 h-[26px] m-0 p-0 shadow-xl`}
          >
            <TiTick size={20} />
          </span>
          <p className={`absolute font-medium left-9 text-sm text-white`}>
            Accept
          </p>
        </button>
      </div>
    </div>
  );
};

export default AcceptButton;
