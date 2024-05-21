import React from "react";

interface PrimaryButtonInterface {
  width?: string;
  onClick?: any;
  title?: string;
  height?: string;
}

const PrimaryButton = ({
  title,
  onClick,
  width,
  height,
}: PrimaryButtonInterface) => {
  return (
    <div>
      <button
        style={{
          width: width ? width : "",
          height: height ? height : "",
        }}
        className={` bg-redBackground text-white py-3 px-5 rounded-md   `}
        onClick={onClick}
      >
        <p className="text-base">{title}</p>
      </button>
    </div>
  );
};

export default PrimaryButton;
