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
  fontSize?: string;
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
  fontSize,
}: SecondaryButtonInterface) => {
  console.log(fontSize);
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          backgroundColor: bgColor,
          height: height,
          fontSize: fontSize ? fontSize : "18px",
        }}
        className={`border-gray-500 ${
          border ? "border-[1px]" : ""
        }   flex justify-center items-center rounded-md bg-[${bgColor}]  ${
          width ? `w-[${width}]` : "w-[100px] xl:w-[100px] "
        }  ${
          height ? `h-[${height}]` : "h-[30px] xl:h-[36px]"
        } text-${textColor}`}
      >
        <div className="flex gap-2 items-center ">
          <img src={beforeIcon} alt="" />
          <p className=" flex items-center font-medium">{title}</p>
        </div>
      </button>
    </div>
  );
};

export default SecondaryButton;
