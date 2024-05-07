import React from "react";
interface SecondaryButtonInterface {
  title: string;
  bgColor: string;
  onClick: any;
  beforeIcon?: any;
  textColor: string;
}

const SecondaryButton = ({
  title,
  bgColor,
  onClick,
  beforeIcon,
  textColor,
}: SecondaryButtonInterface) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`border-gray-500 border-[1px]  flex justify-center items-center rounded-md bg-textPrimary bg-${bgColor} h-[36px] w-[130px]  text-${textColor}`}
      >
        <div className="flex gap-2 items-center ">
          <img src={beforeIcon} alt="" />
          <p className="text-lg font-medium">{title}</p>
        </div>
      </button>
    </div>
  );
};

export default SecondaryButton;
