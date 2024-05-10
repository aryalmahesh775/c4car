import React, { useState } from "react";

interface maheshProp {
  onClick: any;
  checked: boolean;
}

const ToggleButton = ({ onClick, checked }: maheshProp) => {
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
        } w-12  h-6 p-0 m-auto  rounded-full flex transition duration-500 shadow-2xl`}
      >
        <span
          className={`bg-gray-300 transition duration-500 rounded-full w-1/2 h-full m-0 p-0 shadow-xl`}
        ></span>
      </button>
    </div>
  );
};

export default ToggleButton;
