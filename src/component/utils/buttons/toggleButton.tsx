import React, { useState } from "react";

interface userProp {
  onClick: any;
  checked: boolean;
}

const ToggleButton = ({ onClick, checked }: userProp) => {
  const [isActive, setActive] = useState(checked);

  return (
    <div>
      <button
        onClick={() => {
          setActive(!isActive);
          onClick();
        }}
        className={`
        ${isActive ? "justify-end" : "justify-start"} ${
          isActive ? "bg-green-500" : "bg-redBackground"
        } w-[70px] top-[5px] relative  h-6 p-0 m-auto  rounded-full flex transition duration-500 shadow-2xl`}
      >
        <span
          className={`bg-gray-400 transition duration-500 rounded-full w-[20px] h-full m-0 p-0 shadow-xl`}
        ></span>
        {/* if icon needed to use in the button try putting inside span tag */}
        <p
          className={`absolute ${
            isActive ? "" : "hidden"
          } left-8 text-sm text-white`}
        >
          on
        </p>
        <p
          className={`absolute ${
            isActive ? "hidden" : ""
          } left-8 text-sm text-white`}
        >
          off
        </p>
      </button>
    </div>
  );
};

export default ToggleButton;
