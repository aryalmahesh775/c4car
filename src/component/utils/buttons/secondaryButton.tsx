import React from "react";
interface SecondaryButtonInterface {
  title: string;
  bgColor: string;
  onClick: any;
  beforeIcon?: any;
  textColor: string;
  width?: string;
  height?: string;
  border?: boolean;
}

const SecondaryButton = ({
  title,
  bgColor,
  onClick,
  beforeIcon,
  textColor,
  width,
  height,
  border = true,
}: SecondaryButtonInterface) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          backgroundColor: bgColor,
          height: height,
        }}
        className={`border-gray-500 ${
          border ? "border-[1px]" : ""
        }   flex justify-center items-center rounded-md bg-[${bgColor}]  ${
          width ? `w-[${width}]` : "w-[100px] xl:w-[100px] "
        }  ${
          height ? `h-[${height}]` : "h-[30px] xl:h-[36px]"
        } text-${textColor}`}
        // className={`border-gray-500 border-[1px]  flex justify-center items-center rounded-md bg-[${bgColor}] h-[30px] xl:h-[36px] w-[100px] xl:w-[130px]  text-${textColor}`}
      >
        <div className="flex gap-2 items-center ">
          <img src={beforeIcon} alt="" />
          <p className="text-base flex items-center xl:text-lg font-medium">
            {title}
          </p>
        </div>
      </button>
    </div>
  );
};

export default SecondaryButton;
